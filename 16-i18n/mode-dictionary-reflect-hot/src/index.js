import {
  Component,
  bootstrap,
  registerI18nData,
  i18n,
  i18nMessenger,
  VM,
  I18N_DATA_CHANGED,
  ON
} from 'jinge';

import _tpl from './app.html';

const LocaleDataCache = {};
function loadLocale(locale) {
  locale = locale || sessionStorage.getItem('locale') || navigator.language.toLowerCase().replace(/-/g, '_');
  if (locale !== 'zh_cn' && locale !== 'en') {
    locale = 'en';
  }
  if (locale in LocaleDataCache) return Promise.resolve({
    locale,
    data: LocaleDataCache[locale]
  });
  return fetch(`i18n/${locale}.json`).then(res => res.json()).then(data => {
    LocaleDataCache[locale] = data;
    return {
      locale,
      data
    };
  });
}

class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.boy = 'xiaoge';
    this.locale = args.locale;
    this.locales = VM([{
      name: '简体中文',
      locale: 'zh_cn'
    }, {
      name: 'English',
      locale: 'en'
    }]);
    /**
     * i18n in javascript code must handle 
     * I18N_DATA_CHANGED event on i18nMessenger
     * for hot switch.
     */
    this.i18nMessage = i18n('message');
    i18nMessenger[ON](I18N_DATA_CHANGED, () => {
      this.i18nMessage = i18n('message');
    });
  }
  changeLocale(locale) {
    if (this.locale === locale) return;
    this.locale = locale;
    sessionStorage.setItem('locale', locale);
    loadLocale(locale).then(result => {
      registerI18nData(result.data);
    });
  }
}

/**
 * run application
 */
(function () {
  loadLocale().then(result => {
    registerI18nData(result.data);
    bootstrap(App, document.getElementById('root-app'), {
      locale: result.locale
    });
  }).catch(err => {
    console.error(err);
    alert(err.message);
  });
})();

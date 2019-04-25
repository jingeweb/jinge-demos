import {
  Component,
  bootstrap,
  i18n,
  i18nPrefix,
  registerI18nData,
  VM
} from 'jinge';

import {
  config,
  CFG_I18N_WARN_KEY_NOT_FOUND
} from 'jinge/config';
config[CFG_I18N_WARN_KEY_NOT_FOUND] = false;

import _tpl from './app.html';

/**
 * You can directly use i18n on topest level of file
 *   once you pass i18n dictionary data to jinge-framework
 *   by window.JingeI18nData.
 * Otherwise, you must cass registerI18nData before use.
 */
console.log(i18n('title'));

const hI18n = i18nPrefix('hello');
console.log(hI18n('xiaoge')); // equal as i18n('hello.xiaoge');

function loadLocale() {
  const locale = sessionStorage.getItem('locale') || navigator.language.toLowerCase().replace(/-/g, '_');
  if (locale !== 'zh_cn' && locale !== 'en') {
    return 'en';
  }
  return locale;
}

class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.boy = 'xiaoge';
    this.locale = loadLocale();
    this.locales = VM([{
      name: '简体中文',
      locale: 'zh_cn'
    }, {
      name: 'English',
      locale: 'en'
    }]);
  }
  changeLocale(locale) {
    sessionStorage.setItem('locale', locale);
    location.reload();
  }
}

bootstrap(App, document.getElementById('root-app'));
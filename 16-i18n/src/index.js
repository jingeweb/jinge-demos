import {
  Component,
  VM,
  bootstrap,
  _t,
  i18n,
  I18N_WATCH
} from 'jinge';

import _tpl from './app.html';


class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.locale = i18n.locale;
    this.locales = VM([{
      name: '简体中文',
      locale: 'zh_cn'
    }, {
      name: 'English',
      locale: 'en'
    }]);
    
    this[I18N_WATCH](() => {
      this.moon = _t('明月');
      this.boys = VM([{
        name: _t('大葛')
      }, {
        name: _t('小葛')
      }]);
    }, true);
  }

  changeLocale(locale) {
    i18n.switch(locale);
    history.replaceState(null, null, '/?locale=' + locale);
  }
}

bootstrap(App, document.getElementById('root-app'));
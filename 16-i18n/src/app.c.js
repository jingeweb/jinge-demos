import {
  Component,
  vm,
  _t,
  i18n
} from 'jinge';

import _tpl from './app.c.html';


export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.locale = i18n.locale;
    this.locales = vm([{
      name: '简体中文',
      locale: 'zh_cn'
    }, {
      name: 'English',
      locale: 'en'
    }]);
    
    this.__i18nWatch(() => {
      this.moon = _t('月');
      this.boys = vm([{
        name: _t('大葛')
      }, {
        name: _t('小葛')
      }]);
      this.boy = vm({
        name: _t('小葛')
      })
    }, true);
  }

  changeLocale(locale) {
    i18n.switch(locale);
  }
}

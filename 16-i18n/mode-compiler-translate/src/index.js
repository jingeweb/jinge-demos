import {
  Component,
  bootstrap,
  _t,
  VM
} from 'jinge';

import _tpl from './app.html';

const SOME_CONST_MSG = _t('这个是 javascript 代码里使用 i18n 函数获取的多语言文本。');
class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.boy = 'xiaoge';
    this.locale = window.__AppLocale || 'zh_cn';
    this.locales = VM([{
      name: '简体中文',
      locale: 'zh_cn'
    }, {
      name: 'English',
      locale: 'en'
    }]);
    this.i18nMessage = SOME_CONST_MSG;
    this.i18nMessage2 = _t('你好，${name}！', {name: _t('小葛')})
  }
  changeLocale(locale) {
    location.href = '/?locale=' + encodeURIComponent(locale);
  }
}

bootstrap(App, document.getElementById('root-app'));
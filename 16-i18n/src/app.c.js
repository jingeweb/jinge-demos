import { Component, vm } from 'jinge';
import { getLocale, setLocale, watchForComponent } from 'jinge-i18n';

import _tpl from './app.c.html';
import locales from './locales';


export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.locale = getLocale();
    this.locales = vm(locales);
    
    watchForComponent(this, () => {
      this.moon = '月';
      this.boys = vm([{
        name: '大葛'
      }, {
        name: '小葛'
      }]);
      this.boy = vm({
        name: '小葛',
        age: 30
      });
      this.uptt();
    }, true);
  }
  uptt() {
    this.tt = `你好呀，${this.boy.age}岁的${this.boy.name}。`;
  }
  test() {
    this.boy.age++;
    this.boy.name = '小葛' + Math.random().toFixed(4);
    this.uptt();
  }
  changeLocale(locale) {
    setLocale(locale);
  }
}

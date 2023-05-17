/* @jinge-i18n-ignore */

import { Component, vm } from 'jinge';
import { getLocale, setLocale } from 'jinge-i18n';
import _tpl from './app.c.html';

const routes = [{
  path: '/a',
  // component: A
  async component() {
    return (await import(
      './components/a.c'
    )).A;
  }
}, {
  path: '/b',
  // component: B
  async component() {
    return (await import('./components/b.c')).B;
  }
}, {
  path: '/c',
  // component: C
  component() {
    return import('./components/c.c').then(module => {
      return module.C;
    });
  }
}, {
  path: '/(.*)',
  redirect: '/a'
}];


export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.locale = getLocale();
    this.locales = vm([{
      name: '简体中文',
      locale: 'zh_cn'
    }, {
      name: 'English',
      locale: 'en'
    }]);
    this._routes = routes;
  }

  changeLocale(locale) {
    history.pushState(null, '', location.pathname + location.hash.replace(this.locale, locale));
    this.locale = locale;
    setLocale(locale);
  }
}

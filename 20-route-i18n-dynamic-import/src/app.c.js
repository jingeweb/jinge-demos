import {
  Component, vm, _t, i18n, chunk
} from 'jinge';
import _tpl from './app.c.html';

const routes = [{
  path: '/a',
  // component: A
  async component() {
    // 此处的 webpackChunkName 很重要，用于指定 chunk 的名称。
    return (await import(
      // webpackChunkName: "a"
      './components/a.c'
    )).A;
  },
  async onEnter() {
    await chunk.active('a');
  },
  async onLeave() {
    // 通知 chunk 已经不再是当前活动的 chunk。这样使用 i18n.switch 切换语言时，
    // i18n 服务不会加载该 chunk 的目标语言资源包，这样可以避免不必要的网络加载。
    chunk.deactive('a');
  }
}, {
  path: '/b',
  // component: B
  async component() {
    return (await import(/* webpackChunkName: "b" */ './components/b.c')).B;
  },
  async onEnter() {
    await chunk.active('b');
  },
  onLeave() {
    chunk.deactive('b');
  }
}, {
  path: '/c',
  // component: C
  component() {
    return import(/* webpackChunkName: "c" */ './components/c.c').then(module => {
      return module.C;
    });
  },
  onEnter() {
    return chunk.active('c');
  },
  onLeave() {
    chunk.deactive('c');
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
    this.__i18nWatch(() => {
      this.locale = i18n.locale;
    }, true);
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
    history.replaceState(null, '', location.href.replace(
      i18n.locale, locale
    ));
    i18n.switch(locale);
  }
}

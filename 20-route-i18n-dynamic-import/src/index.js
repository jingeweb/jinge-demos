import {
  Component, vm, bootstrap, _t, i18n, chunk, createElement
} from 'jinge';
import _tpl from './app.html';
import _sty from './app.scss';

const routes = [{
  path: '/a',
  // component: A
  async component() {
    // 此处的 webpackChunkName 很重要，用于指定 chunk 的名称。
    return (await import(
      // webpackChunkName: "a"
      './components/a'
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
    return (await import(/* webpackChunkName: "b" */ './components/b')).B;
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
    return import(/* webpackChunkName: "c" */ './components/c').then(module => {
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


class App extends Component {
  static get template() {
    return _tpl;
  }
  static get style() {
    return _sty;
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

(async () => {
  chunk.meta = await fetch('/dist/chunk.json').then(res => res.json());
  const m = location.href.match(/\/(zh_cn|en)\//);
  if (!m) {
    history.replaceState(null, '', location.pathname + '#/zh_cn/');
  } else {
    await i18n.switch(m[1]);
  }
  bootstrap(App, document.getElementById('root-app'));
})().catch(err => {
  console.error(err);
  alert(err.message || err.toString());
});
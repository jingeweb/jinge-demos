import { bootstrap, i18n } from 'jinge';
import App from './app.c';

(async () => {
  const m = location.href.match(/\/(zh_cn|en)\//);
  if (!m) {
    history.replaceState(null, '', location.pathname + '#/zh_cn/');
  } else if (m[1] !== 'zh_cn') {
    console.log(m);
    await i18n.switch(m[1]);
  }
  bootstrap(App, document.getElementById('root-app'));
})().catch(err => alert(err))
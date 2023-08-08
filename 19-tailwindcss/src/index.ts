import { bootstrap } from 'jinge';
import './tailwind.css'; // 需要在最顶部引入 tailwind.css
import './index.scss';

import App from './app.c';

bootstrap(App, document.getElementById('root-app') || document.body);

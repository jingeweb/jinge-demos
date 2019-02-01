import {
  Component,
  bootstrap
} from 'jinge';

const _tpl = `
<h1>Hello, World!</h1>
<p>Time: {time}</p>
<p>Click times: {clickTimes}</p>
<p><button #on="click:handleClick">Click me!</button></p>
`;
class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor() {
    super();
    this.clickTimes = 0;
    this.time = (new Date()).toLocaleString();
    setInterval(() => this.updateTime(), 1000);
  }
  updateTime() {
    this.time = (new Date()).toLocaleString();
  }
  handleClick(event) {
    console.log(event);
    this.clickTimes++;
  }
}

bootstrap(App, document.getElementById('root-app'));

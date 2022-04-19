import {
  Component
} from 'jinge';

import _tpl from './app.c.html';

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.showBoy = true;
    this.inc = 0;
    this.name = 'Jinge';
  }
  __afterRender() {
    /**
     * if Component node have ref: attribute,
     * the component instance can be directly got by this.getChild.
     * After got component instance, it's api can be directly called.
     */
    this.callApi();
  }
  log(...args) {
    console.log(...args);
  }
  callApi($evt) {
    console.log($evt);
    const boy = this.__getRef('boy');
    boy.someApi();
  }
  onBoyApiCalled(name) {
    console.log('boy', name, 'send message: someApiCalled');
  }
  toggleShow($event) {
    this.showBoy = !this.showBoy;
    this.inc++;
    console.log($event, this.inc);
  }
}

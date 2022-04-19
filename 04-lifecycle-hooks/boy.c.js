import {
  Component
} from 'jinge';

import _tpl from './boy.c.html';

export default class Boy extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.name = attrs.name;
  }
  someApi() {
    alert(`Hello, everyone. My name is ${this.name}`);
    this.__notify('someApiCalled', this.name);
  }
  __afterRender() {
    console.log('after render');
    console.log(this.__getRef('someId'));
  }
  __beforeDestroy() {
    console.log('before destroy');
  }
}
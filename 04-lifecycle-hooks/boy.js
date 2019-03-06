import {
  Component
} from 'jinge';

import _tpl from './boy.html';

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
    this.notify('someApiCalled', this.name);
  }
  afterRender() {
    console.log('after render');
    /**
     * you can use this.getChild to get DOM node.
     */
    console.log(this.getChild('someId'));
  }
  beforeDestroy() {
    console.log('before destroy');
  }
}
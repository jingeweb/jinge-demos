import {
  Component,
  BEFORE_DESTROY,
  AFTER_RENDER,
  NOTIFY,
  GET_REF
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
    this[NOTIFY]('someApiCalled', this.name);
  }
  [AFTER_RENDER]() {
    console.log('after render');
    /**
     * you can use this.getChild to get DOM node.
     */
    console.log(this[GET_REF]('someId'));
  }
  [BEFORE_DESTROY]() {
    console.log('before destroy');
  }
}
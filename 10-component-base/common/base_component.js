import {
  Component,
  AFTER_RENDER
} from 'jinge';

export default class MyBaseComponent extends Component {
  constructor(attrs) {
    super(attrs);
    this.name = attrs.name;
  }
  get name() {
    return this._n;
  }
  set name(v) {
    if (this._n === v) return;
    console.log('name updated');
    this._n = v;
  }
  [AFTER_RENDER]() {
    console.log('base afterRender.');
  }
}
import {
  Component
} from 'jinge';
import _tpl from './printer.c.html';

export class Printer extends Component {
  static template = _tpl;

  constructor(attrs) {
    super(attrs);
    this.message = attrs.message;
    
    this._el = true;
    this.__i18nWatch(() => this._up);
  }

  get message() {
    return this._m;
  }

  set message(v) {
    this._m = v;
  }

  __afterRender() {
    console.log('ar');
  }

  __beforeDestroy() {
    console.log('bd');
  }
}
import {
  Component
} from 'jinge';

export class Printer extends Component {
  static get template() {
    return `
<if e:expect="message">
<p slot-pass:default>\${message}</p>
<p slot-pass:else><_t>春江花月夜</_t></p>
</if>`;
  }

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
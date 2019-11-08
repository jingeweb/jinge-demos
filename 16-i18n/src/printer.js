import {
  Component
} from 'jinge';

export class Printer extends Component {
  static get template() {
    return `
<if e:expect="message">
<p slot-pass:default>\${message}</p>
<p slot-pass:else><_t>静以修身，检以养德</_t></p>
</if>`;
  }

  constructor(attrs) {
    super(attrs);
    this.message = attrs.message;
  }
}
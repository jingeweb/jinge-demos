import {
  Component
} from 'jinge';

export class Printer extends Component {
  static get template() {
    return '${message}';
  }
  constructor(attrs) {
    super(attrs);
    this.message = attrs.message;
  }
}
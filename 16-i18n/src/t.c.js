import {
  Component
} from 'jinge';

export class T extends Component {
  static get template() {
    return `<_t>你好</_t><_t>世界</_t>`;
  }
}
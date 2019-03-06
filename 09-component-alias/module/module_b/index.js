import {
  Component
} from 'jinge';

export default class ModuleB extends Component {
  static get template() {
    return `<p>This is ModuleA: <cus-com-a/></p>`;
  }
}
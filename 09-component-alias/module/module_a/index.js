import {
  Component
} from 'jinge';

export default class ModuleA extends Component {
  static get template() {
    return `<p>This is ModuleA: <cus-com-a/></p>`;
  }
}
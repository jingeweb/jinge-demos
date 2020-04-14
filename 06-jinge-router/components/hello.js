import {
  Component
} from 'jinge';
import _tpl from './hello.html';

export default class Hello extends Component {
  static get template() {
    return _tpl;
  }
  __routeShouldLeave() {
    return confirm('确认要退出？');
  }
  __beforeDestroy() {
    console.log('Hello component will be destroy');
  }
}
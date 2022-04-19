import {
  Component
} from 'jinge';
import _tpl from './index.c.html';
export default class ModuleA extends Component {
  static get template() {
    return _tpl;
  }
}
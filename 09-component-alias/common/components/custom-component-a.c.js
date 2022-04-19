import {
  Component
} from 'jinge';
import _tpl from './custom-component-a.c.html';
export default class CustomComponentA extends Component {
  static get template() {
    return _tpl;
  }
}
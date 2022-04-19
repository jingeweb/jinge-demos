import {
  Component
} from 'jinge';
import _tpl from './dynamic.c.html';
export default class Dynamic extends Component {
  static get template() {
    return _tpl;
  }
}
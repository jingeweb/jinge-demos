import {
  Component
} from 'jinge';
import _tpl from './people.c.html';
export default class People extends Component {
  constructor(attrs) {
    super(attrs);
    this.people = attrs.people;
  }
  static get template() {
    return _tpl;
  }
}
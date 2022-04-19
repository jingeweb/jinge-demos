import {
  Component
} from 'jinge';
import _tpl from './person.c.html';
export default class Person extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    console.log('attrs passed from ui-router resolve:', attrs.someConst, attrs.someFn, attrs.someFnPromise);
    super(attrs);
    this.person = attrs.person;
  }
  __beforeDestroy() {
    console.log(`person: ${this.person.id} will be destroy.`);
  }
}
import {
  Component,
  GET_CONTEXT,
  AFTER_RENDER,
  BEFORE_DESTROY
} from 'jinge';
import {
  UIROUTER_CONTEXT
} from 'jinge-ui-router';

export default class Hello extends Component {
  static get template() {
    return '<h4>Hello</h4><p>hello, jinge!</p>';
  }
  [AFTER_RENDER]() {
    this._des = this[GET_CONTEXT](UIROUTER_CONTEXT).transitionService.onBefore({
      from: 'hello.**'
    }, trans => {
      return confirm('确认要退出？');
    });
  }
  [BEFORE_DESTROY]() {
    this._des();
    console.log('Hello component will be destroy');
  }
}
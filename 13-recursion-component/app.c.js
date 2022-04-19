import {
  Component,
  vm
} from 'jinge';

import _tpl from './app.c.html';

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.treeData = vm({
      name: 'root',
      children: [{
        name: 'c-1',
        children: [{
          name: 'c-1-1',
          children: [{
            name: 'c-1-1-1'
          }]
        }, {
          name: 'c-1-2'
        }]
      }, {
        name: 'c-2',
        children: [{
          name: 'c-2-1'
        }]
      }, {
        name: 'c-3'
      }]
    });
  }
}

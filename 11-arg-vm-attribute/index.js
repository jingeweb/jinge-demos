import {
  Component,
  bootstrap,
  VM
} from 'jinge';

import _tpl from './app.html';

class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.basic = VM({
      columns: ['Name', 'Age'],
      data: [
        ['Ge', 20],
        ['Jing', 18]
      ]
    });
    this.advance = VM({
      columns: [{
        title: '-',
        key: '-'
      }, {
        title: 'Name',
        key: 'name'
      }, {
        title: 'Age',
        key: 'age'
      }, {
        title: 'Tags',
        key: 'tags'
      }, {
        title: 'Operate',
        key: '__op'
      }],
      data: [{
        name: 'Ge',
        age: 20,
        tags: ['Boy']
      }, {
        name: 'Jing',
        age: 18,
        tags: ['Girl', 'Wife']
      }]
    });
  }
  prependColumn() {
    this.basic.columns.unshift('Col_' + (Date.now()).toString(32));
    this.basic.data.forEach(row => {
      row.unshift((Math.random() * 1000) | 0);
    });
  }
  appendRow() {

  }
}

bootstrap(App, document.getElementById('root-app'));

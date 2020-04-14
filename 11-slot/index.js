import {
  Component,
  bootstrap,
  vm
} from 'jinge';

import _tpl from './app.html';

class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.data = vm([{
      name: 'Ge',
      age: 20
    }, {
      name: 'Jing',
      age: 18
    }]);
    this.columns = vm([{
      key: 'name',
      title: 'Name'
    }, {
      key: 'age',
      title: 'Age'
    }]);
   
    this.columns2 = vm([{
      key: '-'
    }, {
      key: 'name',
      title: 'Name'
    }, {
      key: 'age',
      title: 'Age'
    }, {
      key: 'tags',
      title: 'Tag'
    }, {
      key: 'action',
      title: 'Action'
    }]);
    this.data2 = vm([{
      key: 0,
      checked: false,
      name: 'Ge',
      age: 20,
      tags: ['Boy']
    }, {
      key: 1,
      name: 'Jing',
      checked: false,
      age: 18,
      tags: ['Girl', 'Wife']
    }]);
    this.allChecked = false;
  }
  prependColumn() {
    const _k = (Date.now()).toString(32);
    this.columns.unshift(vm({
      key: _k,
      title: 'Col_' + _k
    }));
    this.data.forEach(row => {
      row[_k] = (Math.random() * 1000) | 0;
    });
  }
  test() {
    this.columns[0] = vm({
      title: 'TT',
      key: 'age'
    })
  }
  removeRow(idx) {
    console.log('rm', idx);
    this.data2.splice(idx, 1);
    this._update();
  }
  addRow() {
    this.data2.push(vm({
      key: this.data2.length,
      name: Date.now().toString(32),
      age: 16 + (Math.random() * 10 | 0),
      tags: (new Array((Math.random() * 4 | 0) + 1)).fill(0).map((n, i) => `Tag${i+1}`)
    }));
    this.allChecked = false;
  }
  modifyRow() {
    const ri = Math.random() * this.data2.length | 0;
    console.log(ri);
    const row = this.data2[ri];
    row.age++;
    row.name += `_${row.age}`;
    row.tags = vm((new Array((Math.random() * 4 | 0) + 1)).fill(0).map((n, i) => `Tag${i+1}`));
  }
  toggleAllCheck() {
    this.data2.forEach(row => {
      row.checked = !this.allChecked;
    });
    this.allChecked = !this.allChecked;
  }
  toggleCheck(row) {
    row.checked = !row.checked;
    this._update();
  }
  _update() {
    this.allChecked = !this.data2.find(row => !row.checked);
  }
}

bootstrap(App, document.getElementById('root-app'));

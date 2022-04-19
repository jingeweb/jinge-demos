import {
  Component,
  vm,
  bootstrap,
  watch
} from 'jinge';

import _tpl from './app.c.html';

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.data = vm({
      t: 'hello',
      t2: 'hello\njinge',
      t3: true,
      t4: [],
      t5: 'Banana',
      t6: '',
      t7: []
    });
    this.fruits5 = vm(['Apple', 'Orange', 'Banana']);
    this.fruits4 = this.fruits5.map(f => ({name: f, selected: false}));

    this.output = JSON.stringify(this.data, null, 2);
    watch(this, 'data.**', (p) => {
      this.__updateIfNeed();
    });
  }
  log(...args) {
    console.log(...args);
  }
  add(f) {
    console.log('add', f);
    this.data.t4.push(f);
  }
  del(f) {
    const i = this.data.t4.indexOf(f);
    if (i >= 0) this.data.t4.splice(i, 1);
  }
  onMultiSelectChange($select) {
    this.data.t7 = this.data.t4 = this.fruits4.filter((f, i) => {
      return (f.selected = $select.children[i].selected);
    }).map(f => f.name);
  }
  __update() {
    this.output = JSON.stringify(this.data, null, 2);
  }
  test() {
    this.data.t2 = this.data.t = "hello";
    this.data.t6 = this.fruits5[2];
  }
}

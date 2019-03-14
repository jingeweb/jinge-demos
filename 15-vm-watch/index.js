import {
  Component,
  bootstrap,
  VM,
  vmWatch,
  vmUnwatch
} from 'jinge';

import debugConfig from 'jinge/src/util/config';
import { VM_LISTENERS } from 'jinge/src/viewmodel/notify';

import _tpl from './app.html';

debugConfig.vmSyncNotify = true; // use sync mode to debug.

class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.n = 10;
    this.boy1 = VM({
      name: 'ge',
      girlfriend: {
        name: 'jing'
      },
      children: [{
        name: 'yuang'
      }]
    });
    this.boy2 = VM({
      name: 'yy',
      children: [{
        name: 'pp'
      }]
    });

    vmWatch(this, '**', () => {
      console.log('root: anything changed.');
    });

    vmWatch(this, 'boy1.**', () => {
      console.log('root: boy1 deep notify.');
    });

    vmWatch(this, 'boy2.children.*.name', () => {
      console.log('root: boy2.children.*.name notify');
    });

    vmWatch(this, 'boy2.*.name', () => {
      console.log('root: boy2.*.name notify.');
    });

    vmWatch(this.boy1, '*.name', () => {
      console.log('boy1: *.name notify');
    });

    // array item watch
    vmWatch(this.boy1, 'children.1.name', () => {
      console.log('boy1: children[1].name notify.');
    });
    // deep watch
    vmWatch(this.boy1, 'children.**', () => {
      console.log('boy1: deep children notify');
    });

    this._h = () => {
      console.log('boy2: xxx.ooo notify.');
    };
    vmWatch(this.boy2, 'xxx.ooo', this._h);
  }
  test1() {
    /*
     * this.boy1 和 this.boy2 指向同一个 ViewModel，
     * 因此改变 this.boy1 也会触发对 this.boy2 的监听。
     */
    this.boy1.children[0].name = 'cc';
  }
  test2() {
    /**
     * jinge 框架里对 ViewModel 的 watch，不是基于值变化的，而是基于赋值路径。
     * 比如 'boy2' 这个路径发生了赋值行为，那么一定会通知该路径及其子路径上的监听。
     * 无论路径对应的实际值是否发生变化。
     */
    this.boy2 = VM({
      name: 'ge'
    });
  }

  test3() {
    /**
     * 此处的赋值操作，会同时触发 boy1 上对 `*.name` 的监听，
     * 这一点容易让人迷糊，在 README 中有详细的解释。 
     */
    this.boy1.children.push({
      name: 'ppp'
    });
  }

  clear() {
    // clear all watch listeners
    vmUnwatch(this);
    // clear all listeners on path 'children.**'
    vmUnwatch(this.boy1, 'children.**');
    // remove specify listener
    vmUnwatch(this.boy2, 'xxx.ooo', this._h);
  }
}

bootstrap(App, document.getElementById('root-app'));

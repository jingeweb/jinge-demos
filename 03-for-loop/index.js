import {
  Component,
  bootstrap,
  VM
} from 'jinge';

import _tpl from './app.html';

let AUTO_INC = 1000;

class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.INC = 10;
    this.numbers = VM([0, 1, 2]);
    this.persons = VM([{
      id: '001',
      name: 'XiaoGe'
    }, {
      id: '002',
      name: 'Jinge'
    }]);
    setInterval(() => {
      this.numbers.push(AUTO_INC++);
      this.persons.push(VM({
        id: Date.now().toString(32),
        name: Date.now().toString(32)
      }));
    }, 3000);
  }
  test($evt) {
    // this.numbers.push(AUTO_INC++);
    // return;
    // console.log($evt);
    this.numbers = VM([6, 0, 7, 3, 2]);
    this.persons.length = 0;
  }
  push() {
    const tmp = [];
    for(let i = 0; i < 10000; i++) {
      tmp.push(AUTO_INC++);
    }
    this.numbers.push(...tmp);
  }
}

bootstrap(App, document.getElementById('root-app'));

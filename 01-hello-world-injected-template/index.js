import {
  Component,
  bootstrap,
  VM
} from 'jinge';

class Boy extends Component {
  static get template() {
    return 'boy: ${xx.b}';
  }
  constructor(attrs) {
    super(attrs);
    this.xx = attrs.xx;
    console.log(this.xx);
  }
}

class App extends Component {
  static get template() {
    return `
<!--
  // if Component to use is in the same file, just import it from '.'.
  import Boy from '.';
-->
<Boy e:xx="{b: a[k].c}"/>`;
  }
  constructor(args) {
    super(args);
    this.clickTimes = 0;
    this.k = 'm';
    this.a = VM({m: {c: 10}, n: {c: 20}});
    setTimeout(() => {
      this.k = 'n'
    }, 10000);
  }
  log(...args) {
    console.log(...args);
  }
}

bootstrap(App, document.getElementById('root-app'));

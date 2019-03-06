import {
  Component,
  bootstrap
} from 'jinge';

class Boy extends Component {
  static get template() {
    return `
<!--
  // You must explicitly import the component used.
  import Girl from './girl';
-->
<div> Hello everyone, my name is: \${name || "xiaoge"}.</div>
<if e:expect="clickTimes >= 2">
<div> My girlfriend is <Girl name="\${girl}-\${clickTimes}"/>.</div>
</if>
<div> You have clicked \${clickTimes} times. </div>
`;
  }
  constructor(attrs) {
    super(attrs);
    this.clickTimes = attrs.clickTimes;
    this.name = attrs.name;
    this.girl = attrs.girl;
  }
}

class App extends Component {
  static get template() {
    return `
<!--
  // if Component to use is in the same file, just import it from '.'.
  import Boy from '.';
-->
<Boy e:name="name" girl="alice" clickTimes="\${clickTimes}"/>
<div>
<button on:click="name='yuhang'; clickTimes++;">Increase</button>
<button on:click="if (clickTimes === 1) {log('reset name'); name='xiaoge'} if (clickTimes > 0) clickTimes--;">Decrease</button>
</div>`;
  }
  constructor(args) {
    super(args);
    this.clickTimes = 0;
  }
  log(...args) {
    console.log(...args);
  }
}

bootstrap(App, document.getElementById('root-app'));

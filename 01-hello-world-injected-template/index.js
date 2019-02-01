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
<div> My girlfriend is <Girl name="\${girl}-\${clickTimes.toString(32)}"/>.</div>
</if>
<div> You have clicked \${clickTimes} times. </div>
`;
  }
}

class App extends Component {
  static get template() {
    return `
<!--
  // Use short import statement to explicitly declare the name of the component used.
  // The used component must be in the same file.
  import Boy;
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

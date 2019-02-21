import {
  Component
} from 'jinge';

export default class Hello extends Component {
  static get template() {
    return '<h4>Hello</h4><p>hello, jinge!</p>';
  }
  beforeDestroy() {
    console.log('Hello component will be destroy');
  }
}
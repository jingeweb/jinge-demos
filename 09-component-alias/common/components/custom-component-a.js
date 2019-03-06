import {
  Component
} from 'jinge';

export default class CustomComponentA extends Component {
  static get template() {
    return `Hello, This is CustomComponentA`;
  }
}
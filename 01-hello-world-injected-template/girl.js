import {
  Component
} from 'jinge';

export default class Girl extends Component {
  static get template() {
    return '${name}';
  }
  afterRender() {
    console.log('girl has been rendered.');
  }
  beforeDestroy() {
    console.log('girl will be destroied.');
  }
}

import {
  Component
} from 'jinge';

export default class Girl extends Component {
  static get template() {
    return '${name}';
  }
  constructor(args) {
    super(args);
    this.name = args.name;
  }
  __afterRender() {
    console.log('girl has been rendered.');
  }
  __beforeDestroy() {
    console.log('girl will be destroied.');
  }
}

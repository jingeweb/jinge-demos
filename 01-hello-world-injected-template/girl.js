import {
  Component
} from 'jinge';

export default class Girl extends Component {
  constructor(args) {
    super(args);
    this.name = args.name;
  }
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

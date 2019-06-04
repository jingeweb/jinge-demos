import {
  Component,
  AFTER_RENDER,
  BEFORE_DESTROY
} from 'jinge';

export default class Girl extends Component {
  static get template() {
    return '${name}';
  }
  constructor(args) {
    super(args);
    this.name = args.name;
  }
  [AFTER_RENDER]() {
    console.log('girl has been rendered.');
  }
  [BEFORE_DESTROY]() {
    console.log('girl will be destroied.');
  }
}

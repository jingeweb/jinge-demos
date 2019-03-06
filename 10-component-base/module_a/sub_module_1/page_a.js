import Component from 'my_base_component';

export default class PageA extends Component {
  constructor(attrs) {
    super(attrs);
  }
  static get template() {
    return '<p>This is PageA: ${name}</p>';
  }
}
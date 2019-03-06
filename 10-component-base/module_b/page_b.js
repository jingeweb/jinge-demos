import Component from 'my_base_component';

export default class PageB extends Component {
  constructor(attrs) {
    super(attrs);
  }
  static get template() {
    return '<p>This is PageB: ${name}</p>';
  }
  afterRender() {
    super.afterRender();
    console.log('PageB afterRender.');
  }
}
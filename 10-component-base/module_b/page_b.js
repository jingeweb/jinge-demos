import Component from 'my_base_component';
import {
  AFTER_RENDER
} from 'jinge';

export default class PageB extends Component {
  constructor(attrs) {
    super(attrs);
  }
  static get template() {
    return '<p>This is PageB: ${name}</p>';
  }
  [AFTER_RENDER]() {
    super[AFTER_RENDER]();
    console.log('PageB afterRender.');
  }
}
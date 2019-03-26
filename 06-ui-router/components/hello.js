import {
  Component
} from 'jinge';

export default class Hello extends Component {
  static get template() {
    return '<h4>Hello</h4><p>hello, jinge!</p>';
  }
  afterRender() {
    this._des = router.transitionService.onBefore({
      from: 'hello.**'
    }, trans => {
      return confirm('确认要退出？');
    });
  }
  beforeDestroy() {
    this._des();
    console.log('Hello component will be destroy');
  }
}
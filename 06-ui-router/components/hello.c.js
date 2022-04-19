import {
  Component
} from 'jinge';
import _tpl from './hello.c.html';
export default class Hello extends Component {
  static get template() {
    return _tpl;
  }
  __afterRender() {
    const router = this.__getContext('ui-router');
    const transition = router.transitionService;

    this._des = transition.onExit({
      from: 'hello.**'
    }, trans => {
      /*
       * 如果直接使用浏览器前进后退，或者直接在浏览器地址栏手动改变 url，
       * 会导致虽然跳转能被阻止，但仍然在历史中产生了记录，从而无法再后退。
       * 
       * TODO: track bug of ui-router v1.0
       * https://stackoverflow.com/questions/44896070/ui-router-browser-back-button-changes-url-even-abort-transition-is-called
       * https://github.com/angular-ui/ui-router/issues/3416
       */
      return confirm('确认要退出？');
    });
  }
  __beforeDestroy() {
    this._des();
    console.log('Hello component will be destroy');
  }
}
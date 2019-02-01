import {
  Component
} from 'jinge';
import { createFragment, appendChild, createElement, createElementWithoutAttrs } from '../../src/dom';
import { ROOT_ELEMENTS } from '../../src/core/component';

export class Hello extends Component {
  static get template() {
    return function render(__component_ctx) {
      const $frag = createFragment();
      appendChild(
        $frag,
        (() => {
          const __el = createElementWithoutAttrs('p', 'hello, my love.');
          __component_ctx[ROOT_ELEMENTS].push(__el);
          return __el;
        })(),
        (() => {
          const __el = createElement('p', {t: 'oo'}, 'yes');
          __component_ctx[ROOT_ELEMENTS].push(__el);
          return __el;
        })()
      );
      return $frag;
    };
  }
  constructor(attrs) {
    super(attrs);
  }
  beforeDestroy() {
    console.log('before hello destroy');
  }
}
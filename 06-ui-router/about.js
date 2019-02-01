import {
  Component
} from 'jinge';
import { createFragment, appendChild, createElementWithoutAttrs } from '../../src/dom';
import { ROOT_ELEMENTS } from '../../src/core/component';

export class About extends Component {
  static get template() {
    return function render(__component_ctx) {
      const $frag = createFragment();
      appendChild(
        $frag,
        (() => {
          const __el = createElementWithoutAttrs('h1', 'About');
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
}
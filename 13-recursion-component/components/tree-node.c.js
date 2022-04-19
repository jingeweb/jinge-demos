import {
  Component
} from 'jinge';

import _tpl from './tree-node.c.html';

export default class TreeNode extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.nodeLevel = attrs.nodeLevel || 0;
    this.nodeData = attrs.nodeData;
  }
}
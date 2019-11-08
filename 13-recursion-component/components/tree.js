import {
  Component,
  VM,
  isArray
} from 'jinge';

export default class Tree extends Component {
  static get template() {
    return `
<!-- import TreeNode from './tree-node.js'; -->
<for e:loop="data" vm:each="nd">
<TreeNode e:nodeData="nd"/>
</for>
`
  }
  constructor(attrs) {
    super(attrs);
    this.data = attrs.data;
  }
  get data() {
    return this._data;
  }
  set data(v) {
    this._data = isArray(v) ? v : VM([v]);
  }
}
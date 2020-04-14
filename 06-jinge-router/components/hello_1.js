import {
  Component, watch, unwatch
} from 'jinge';

export default class HelloA extends Component {
  static get template() {
    return '<p>Hello-A</p><p>Query: a=${qa}</p>';
  }

  constructor(attrs) {
    super(attrs);


    this._oqc = this._onQueryChange.bind(this);
    this._query = this.__getContext('router').query;
    watch(this._query, '*', this._oqc);
    this._onQueryChange();
  }
  __beforeDestroy() {
    unwatch(this._query, '*', this._oqc);
  }
  _onQueryChange() {
    this.qa = this._query.a;
  }
}
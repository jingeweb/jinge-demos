import { Component } from "jinge";
import _tpl from './a.c.html';

let N = 0;
export class A extends Component {
  static template = _tpl;
  constructor(attrs) {
    super(attrs);
    this.n = N++;
  }
}
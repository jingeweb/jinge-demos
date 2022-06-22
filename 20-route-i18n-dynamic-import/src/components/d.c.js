import { Component } from 'jinge';
import _tpl from './d.c.html';

/**
 * 这个组件用于测试 webpack 抽取不同 chunk 的共公代码成独立 chunk。
 * 由于只有共公代码大到有价值抽取成独立文件，webpack 才会抽取，因此此处组件的 template 写的很罗嗦。
 * 
 * D 组件被 A 和 C 共同引用， webpack 会生成一个名叫 a~c 的公共 bundle。
 */
export class D extends Component {
  static template = _tpl;
}
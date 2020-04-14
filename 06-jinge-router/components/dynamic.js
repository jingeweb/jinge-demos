import {
  Component
} from 'jinge';

export default class Dynamic extends Component {
  static get template() {
    return '<p>Dynamic-Loaded-by-import()</p>';
  }
}
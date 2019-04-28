import {
  Component
} from 'jinge';

export class Redirect extends Component {
	static get template() {
		return '<ui-view/>';
	}
}

export class RedirectDetail extends Component {
  static get template() {
    return `
<h4>Redirect</h4>
<p>here is child detail redirect from parent.</p>`;
  }
}
import {
  Component,
  BEFORE_DESTROY
} from 'jinge';

export default class Person extends Component {
  static get template() {
    return `
<div>
  <h4>A person!</h4>

  <div>Name: \${person.name}</div>
  <div>Id: \${person.id}</div>
  <div>Company: \${person.company}</div>
  <div>Email: \${person.email}</div>
  <div>Address: \${person.address}</div>

  <ui-sref to="people">
  <button>Close</button>
  </ui-sref>
</div>`
  }
  constructor(attrs) {
    console.log('attrs passed from ui-router resolve:', attrs.someConst, attrs.someFn, attrs.someFnPromise);
    super(attrs);
    this.person = attrs.person;
  }
  [BEFORE_DESTROY]() {
    console.log(`person: ${this.person.id} will be destroy.`);
  }
}
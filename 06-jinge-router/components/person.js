import {
  Component
} from 'jinge';

export default class Person extends Component {
  static get template() {
    return `
<div>
  <h4>A person!</h4>

  <div>Name: \${_person.name}</div>
  <div>Id: \${_person.id}</div>
  <div>Company: \${_person.company}</div>
  <div>Email: \${_person.email}</div>
  <div>Address: \${_person.address}</div>

  <router-link to="/people">
  <button>Close</button>
  </router-link>
</div>`
  }
  constructor(attrs) {
    console.log('attrs passed from ui-router resolve:', attrs.someConst, attrs.someFn, attrs.someFnPromise);
    super(attrs);
    this._person = attrs.person;
  }
  __beforeDestroy() {
    console.log(`person: ${this._person.id} will be destroy.`);
  }
}
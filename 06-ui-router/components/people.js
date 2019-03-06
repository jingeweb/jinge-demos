import {
  Component
} from 'jinge';

export default class People extends Component {
  constructor(attrs) {
    super(attrs);
    this.people = attrs.people;
  }
  static get template() {
    return `
<div style="display:flex;flex-direction:row;">
  <div style="margin-right: 20px;">
    <h4>Some People:</h4>
    <ul>
      <for e:loop="people" _key="each.id" vm:each="person">
      <li>
        <ui-sref
          e:text="person.name"
          to="people.person"
          e:params="{personId: person.id}"
          active="active"
        />
      </li>
      </for>
    </ul>
  </div>
  <div>
  <ui-view/>
  </div>
</div>`
  }
}
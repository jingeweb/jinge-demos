import {
  Component
} from 'jinge';

export default class People extends Component {
  constructor(attrs) {
    super(attrs);
    this._people = attrs.people;
  }
  static get template() {
    return `
<div style="display:flex;flex-direction:row;">
  <div style="margin-right: 20px;">
    <h4>Some People:</h4>
    <ul>
      <for e:loop="_people" key="each.id" vm:each="person">
      <li>
        <router-link
          e:text="person.name"
          e:to="{name: 'person', params: {personId: person.id}}"
          active="active"
        />
      </li>
      </for>
    </ul>
  </div>
  <div>
  <router-view>loading...</router-view>
  </div>
</div>`
  }
}
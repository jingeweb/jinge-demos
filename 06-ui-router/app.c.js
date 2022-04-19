import {
  Component,
  vm
} from 'jinge';
import {
  Visualizer
} from '@uirouter/visualizer';
import _tpl from './app.c.html';

import About from './components/about.c';
import Hello from './components/hello.c';
import People from './components/people.c';
import Person from './components/person.c';
import {
  RedirectDetail
} from './components/redirect.c';

import {
  getAllPersons,
  getPersonById
} from './service/api';

const uiStates = [{
  name: 'hello',
  url: '/hello',
  component: Hello
}, {
  name: 'about',
  url: '/about',
  component: About
}, {
  name: 'redirect',
  url: '/redirect',
  redirectTo: 'redirect.detail'
}, {
  name: 'redirect.detail',
  url: '/detail',
  component: RedirectDetail
}, {
  name: 'people',
  url: '/people',
  component: People,
  resolve: {
    people: () => getAllPersons().then(result => vm(result))
  }
}, {
  name: 'people.person',
  url: '/:personId',
  component: Person,
  /*
   * resolve can be object or array.
   * if it's array, same as usage of @uirouter/react.
   *   see: https://ui-router.github.io/react/tutorial/hellosolarsystem
   * if it's object, it will be convert to array.
   */
  resolve: {
    someFn: () => 'hello2',
    someFnPromise: () => new Promise(res => setTimeout(() => res('hello3'), 1000)),
    /* 
     * if resolve value is array, last item must be function, 
     * non-last items are deps. see https://ui-router.github.io/react/tutorial/hellosolarsystem
     */
    person: ['$transition$', 'people', (trans, people) => {
      console.log('inherited resove people:', people);
      const id = trans.params().personId;
      return getPersonById(id).then(result => vm(result));
    }]
  }
}];

export default class App extends Component {
  static template = _tpl;
  constructor(args) {
    super(args);
    this._states = uiStates;
    this._plugins = [Visualizer];
    this.newTab = false;
  }
}

import {
  Component,
  bootstrap
} from 'jinge';
import { Visualizer } from '@uirouter/visualizer';
import _tpl from './app.html';

import About from './components/about';
import Hello from './components/hello';
import People from './components/people';
import Person from './components/person';
import {
  Redirect,
  RedirectDetail
} from './components/redirect';

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
  component: Redirect,
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
    people: () => getAllPersons()
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
    /*
     * resolve value can be constant/function
     * constant will be convert to function: '() => constant'.
     */
    someConst: 'hello1',
    someFn: () => 'hello2',
    someFnPromise: () => new Promise(res => setTimeout(() => res('hello3'), 1000)),
    /* 
     * if resolve value is array, last item must be function, 
     * non-last items are deps. see https://ui-router.github.io/react/tutorial/hellosolarsystem
     */
    person: ['$transition$', 'people', (trans, people) => {
      console.log('inherited resove people:', people);
      const id = trans.params().personId;
      return getPersonById(id);
    }]
  }
}];

class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this._states = uiStates;
    this._plugins = [Visualizer];
  }
}

bootstrap(App, document.getElementById('root-app'));

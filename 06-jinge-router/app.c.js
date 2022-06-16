import {
  Component, vm
} from 'jinge';

import _tpl from './app.c.html';

import FooterA from './components/footer_a.c';
import FooterB from './components/footer_b.c';
import HelloB from './components/hello_2.c';
import HelloA from './components/hello_1.c';
import About from './components/about.c';
import Hello from './components/hello.c';
import People from './components/people.c';
import Person from './components/person.c';

import {
  getAllPersons,
  getPersonById
} from './api';

const routes = [{
  path: '/hello',
  redirect: {
    name: 'hello-1',
    query: { a: 10 }
  },
  components: {
    default: Hello,
    footer: FooterA
  },
  children: [{
    path: 'a',
    name: 'hello-1',
    component: HelloA
  }, {
    path: 'b',
    name: 'hello-2',
    component: HelloB
  }]
}, {
  path: '/about',
  components: {
    default: About,
    footer: FooterB
  }
}, {
  path: '/people',
  components: {
    default: People,
    footer: FooterA
  },
  resolves: {
    people: () => getAllPersons().then(result => vm(result))
  },
  children: [{
    name: 'person',
    path: '/:personId',
    component: (params, query, resolves) => {
      console.log('async get component:', params, query, resolves);
      /**
       * params: { personId: xx }
       * query: browser location.search
       * resolves: { people, someFn, someFnPromise, person }
       */
      return new Promise(res => setTimeout(() => {
        res(Person);
      }, 2000));
    },
    resolves: {
      someConst: 32,
      someFn: () => 'hello2',
      someFnPromise: () => new Promise(res => setTimeout(() => res('hello3'), 1000)),
      person: (params, query, parentResolves) => {
        console.log('inherited resove people:', parentResolves.people);
        const id = params.personId;
        return getPersonById(id).then(result => result);
      }
    }
  }]
}, {
  path: '/dynamic',
  components: {
    // async default() {
    //   return import()
    // },
    async default() {
      return (await import('./components/dynamic.c')).default;
    },
    async footer() {
      return (await import('./components/footer_c.c')).default;
    }
  }
}, {
  path: '(.*)',
  redirect: '/hello'
}];

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this._routes = routes;
    this.newTab = false;
  }
}


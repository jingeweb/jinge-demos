import TodoList from './components/list.c';

export default [{
  name: 'list',
  path: '/:status',
  component: TodoList,
  resolves: {
    status(params) {
      return params.status;
    }
  }
}, {
  path: '/(.*)',
  redirect: {
    name: 'list',
    params: {
      status: 'all'
    }
  }
}];
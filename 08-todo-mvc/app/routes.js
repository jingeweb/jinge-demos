import TodoList from './components/list';

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
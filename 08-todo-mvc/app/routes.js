import TodoList from './components/list';

export default [{
  name: 'list',
  url: '/:status',
  component: TodoList,
  params: {
    status: {
      squash: true,
      value: ''
    }
  },
  resolve: {
    status: ['$transition$', trans => trans.params().status]
  }
}];
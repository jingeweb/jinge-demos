import { createRouter } from 'jinge-router';
import { TodoList } from './components/List';

export const router = createRouter({
  routes: [
    {
      path: '/:status',
      component: TodoList,
    },
    {
      path: '*',
      redirectTo: '/all',
    },
  ],
});

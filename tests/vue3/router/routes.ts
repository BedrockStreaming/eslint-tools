import { RouterOptions } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes: RouterOptions['routes'] = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
];

export default routes;

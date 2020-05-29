import VueRouter from 'vue-router';

// pages
import About from '../pages/About';
import Home from '../pages/Home';

export default new VueRouter({
  mode: 'abstract',
  routes: [
    { path: '/', component: Home, alias: '/' },
    { path: '/about', component: About, alias: '/about' }
  ]
});

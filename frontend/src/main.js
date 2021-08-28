import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Article.vue'
import Registration from './components/Registration.vue'
import Login from './components/Login.vue'
import AllPosts from './components/AllPosts.vue'
import NewArticle from './components/NewArticle.vue'
import Contacts from './components/Contact.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: '/registration',
    component: Registration,
    name: "Registration"
  },
  {
    path: '/login',
    component: Login,
    name: "Login"
  },
  {
    path: '/allposts',
    component: AllPosts,
    name: "AllPosts"
  },
  {
    path: '/newarticle',
    component: NewArticle,
    name: "NewArticle"
  },
  {
    path: '/article',
    component: Home,
    name: "Home"
},
{
  path: '/contact',
  component: Contacts,
  name: "Contact"
}
];

const router = new VueRouter ({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

export default router
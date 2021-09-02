import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Registration from './components/Registration.vue'
// import Login from './components/Login.vue'
import NewArticle from './components/NewArticle.vue'
import AllPosts from './components/AllPosts.vue'
import Home from './components/Home.vue'
import ErrorPage from './components/ErrorPage.vue'


Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: '/registration',
    component: Registration,
    name: "Registration"
  },
  // {
  //   path: '/login',
  //   component: Login,
  //   name: "Login"
  // },
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
    path: '/',
  component: Home,
  name: "Home"
},
{
  path: '*',
  component: ErrorPage,
  name: "ErrorPage"

}
];

const router = new VueRouter ({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

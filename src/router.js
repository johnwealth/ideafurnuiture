import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'
import Contact from './components/pages/contact.vue'
import About from './components/pages/about.vue'
import Service from './components/pages/service.vue'
import Faq from './components/pages/faq.vue'
import Checkout from './components/pages/checkout.vue'
import Order from './components/pages/order.vue'
import ProductslistingPage from './components/pages/productslistingpage.vue'
import Ordersummary from './components/pages/Ordersummary.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage, name:'signup' },
  { path: '/signin', component: SigninPage, name:'signin' },
 
  {
    path: '/dashboard',
    component: DashboardPage,
    beforeEnter (to, from, next) {
      if (store.state.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  },

  { path: '/contact', component: Contact, name:'contact' },
  { path: '/about', component: About, name:'about' },
  { path: '/service', component: Service, name:'service' },
  { path: '/checkout', component: Checkout, name:'checkout' },
  { path: '/faq', component: Faq, name:'faq' },
  { path: '/order', component: Order, name:'order' },
  { path: '/productslistingpage', component: ProductslistingPage, name:'productslistingpage' },
  { path: '/Ordersummary', component: Ordersummary, name:'Ordersummary' }
]

export default new VueRouter({mode: 'history', routes})
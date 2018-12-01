import Vue from 'vue'
import Router from 'vue-router'
import DonacionDapp from '@/components/donacion-dapp'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'donacion-dapp',
      component: DonacionDapp
    }
  ]
})

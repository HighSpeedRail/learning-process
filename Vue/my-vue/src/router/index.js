import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Patient from '@/components/Patient'
import Doctor from '@/components/Doctor'
import Demo from '@/components/Demo'

Vue.use(Router);

var bus = new Vue();

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/demo',
          component: Demo
        },
        {
          path: '/patient',
          component: Patient
        },
        {
          path: '/doctor',
          component: Doctor
        }
      ]
    }
  ]
})

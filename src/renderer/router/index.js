import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: require('@/components/Dashboard/Dashboard.vue').default
    },
    {
      path: '/viewing/:name',
      name: 'viewing',
      component: require('@/components/Viewing/ViewingPage.vue').default,
      props: true
    },
    {
      path: '/editing/:name',
      name: 'editing',
      component: require('@/components/Editing/EditingPage.vue').default,
      props: true
    },
    {
      path: '/splash',
      name: 'splash',
      component: require('@/components/Splash.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

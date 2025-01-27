import Vue from 'vue'
import Router from 'vue-router'
// import firebase from 'firebase';
// heatmapjs for vue
import heatmapjsVue from 'heatmapjs-vue' 
import h337 from 'heatmap.js'

import helloworld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import test from './components/Test.vue'
import View from './components/ViewLog.vue'
import fly from './components/Fly.vue'
import login from './components/Login.vue'
import Gazer from './components/Gazer.vue'
import heatMap from './components/EditHeatMap.vue'
import clickHeatMap from './components/clickHeatmap.vue'
import GazerEmotionPredict from './components/GazerEmotionPredict.vue'
import PersonalUse from './components/PersonalUse.vue'
import MediaStream from './components/MediaStream.vue'
import GroupRoom from './components/GroupRoom'
import ExportLogToCsv from './components/ExportLogToCsv.vue'
import welcome from './components/IntroCarousel.vue'

Vue.use(Router)
Vue.use( heatmapjsVue )
Vue.use( h337 )

const router =  new Router({
  routes: [
    {
      path: '/',
      component: Menu,
    },
    {
      path: '/home',
      redirect: '/home',
    },
    {
      path: '/ExportLogToCsv',
      component: ExportLogToCsv,
    },
    {
      path: '/MediaStream',
      component: MediaStream,
    },
    {
      path: '/individual',
      component: PersonalUse
    },
    {
      path: '/room',
      component: GroupRoom
    },
    {
      path: '/model',
      component: GazerEmotionPredict,
    },
    {
      path: '/test',
      component: test,
    },
    {
      path: '/view',
      component: View,
    },
    {
      path: '/gazer',
      component: Gazer,
    },
    {
      path: '/heatmap',
      component: heatMap,
    },
    {
      path: '/clickHeatmap',
      component: clickHeatMap,
    },
    {
      path: '/test_emotion_model',
      component: GazerEmotionPredict,
    },
    {
      path: '/test_fly',
      component: fly,
    },
    {
      path: '/start',
      name: 'start',
      component: test,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/welcom',
      component: welcome,
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(firebase.auth().currentUser)
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login');
  // let isWelcome = (localStorage.getItem('welcomed') || false)
  // localStorage.setItem('welcomed', true)
  // if (!isWelcome){
  //   console.log('welcome')
  //   next('/welcome')
  // }


  else next();
});

export default router;
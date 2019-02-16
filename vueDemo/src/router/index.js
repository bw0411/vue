import Vue from 'vue'
import Router from 'vue-router'
//导入请求网络的路由  需要执行npm install --save vue-resource安装改路由
import VueResource from 'vue-resource'

import HelloWorld from '@/components/HelloWorld'
import sssfmIoBill from '@/components/sssfmIoBIll/sssfmIoBillList'
import elementUi from '@/components/elementDemo/elementDemo'
import fileUpload from '@/components/file/fileUpload'

Vue.use(Router)

Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/sssfmIoBill',
      name:'sssfmIoBill',
      component:sssfmIoBill
    },
    {
      path:'/fileUpload',
      name:'fileUpload',
      component:fileUpload
    },
    {
      path:'/elementUi',
      name:'elementUi',
      component:elementUi
    }
  ]
})

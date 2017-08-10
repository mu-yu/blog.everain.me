import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/views/PostList'
import PostDetail from '@/views/PostDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: PostList,
    },
    {
      path: '/post/:file',
      name: 'PostDetail',
      component: PostDetail,
    },
  ],
})

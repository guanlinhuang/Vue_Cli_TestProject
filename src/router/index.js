import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [ // 子路徑
      {
        path: 'a', // 不需加斜線
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'b', // 不需加斜線
        component: () => import('../views/ComponentB.vue')
      },
      {
        path: 'dynamicRouter/:id', // 不需加斜線
        component: () => import('../views/DynamicRouter.vue')
      },
      {
        path: 'dynamicRouterByProps/:id', // 不需加斜線
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('route', route)
          return {
            id: route.params.id
          }
        }
      },
      {
        path: 'namedView', // 不需加斜線
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: { // 載入多個元件，所以要加s
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue')
            }
          },
          {
            path: 'a2b',
            components: { // 載入多個元件，所以要加s
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue')
            }
          }
        ]
      },
      {
        path: 'routernavigation',
        name: 'routernavigation',
        component: () => import('../views/RouterNavigation.vue')
      }
    ]
  },
  // 404頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向
  {
    path: '/newpage/:pathMatch(.*)*',
    redirect: {
      name: 'home'
    }
  }
]

// 起手式
// 路由設定(Vue Router基本環境建立)
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active', // 可以讓選項變成啟用中的樣式
  routes,
  scrollBehavior (to, from, savedPosition) { // 可以控制 savedPosition 決定網頁畫面的滾動位置
    console.log(to, from, savedPosition)
    // `to` 和 `from` 都是路由路径
    // `savedPosition` 如果不存在可以为 null
    return {
      top: 0
    }
    // 所有頁面會滾動到500的高度

    // if (to.fullPath.match('newpage')) {
    //   return {
    //     top: 500
    //   }
    // }
    // 指定頁面會滾動到500的高度
  }
})

export default router

// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// }

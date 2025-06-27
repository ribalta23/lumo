import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Inicio'
      }
    },
    {
      path: '/videocall',
      name: 'videocall',
      component: () => import('../views/VideoChat.vue'),
      meta: {
        title: 'Videollamada'
      }
    }
  ],
})

// Guard para cambiar el título de la página
router.beforeEach((to, from, next) => {
  const baseTitle = 'Lumo'
  if (to.meta?.title) {
    document.title = `${baseTitle} | ${to.meta.title}`
  } else {
    document.title = baseTitle
  }
  next()
})

export default router

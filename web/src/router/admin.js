export default [
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('../views/admin-login.vue'),
  },
  {
    path: '/admin',
    name: 'admin-dashboard',
    component: () => import('../views/admin-articles.vue'),
    meta: { requiresAuth: true },
  },
]
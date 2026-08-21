export default [
  {
    path: '/blog/:id',
    name: 'blog-detail',
    component: () => import('../views/blog-detail.vue'),
  },
]
function view (view, path='views') {
  return () => import(/* webpackChunkName: '' */ `@/${path}/${view}.vue`).then(m => m.default || m)
}

export default [
  {
    path: '',
    name: 'MainLayout',
    component: view('MainLayout', 'layouts'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: view('dashboard/index')
      }
    ]
  },
  {
    path: '',
    name: 'BlankLayout',
    component: view('BlankLayout', 'layouts'),
    children: [
      {
        path: '/auth/login',
        name: 'authLogin',
        component: view('auth/login')
      }
    ]
  }
]

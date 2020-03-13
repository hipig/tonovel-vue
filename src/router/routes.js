function view (view, path='views') {
  return () => import(/* webpackChunkName: '' */ `@/${path}/${view}.vue`).then(m => m.default || m)
}

export default [
  {
    path: '',
    name: 'blankLayout',
    component: view('BlankLayout', 'layouts'),
    children: [
      {
        path: '/',
        name: 'index',
        component: view('Index')
      }
    ]
  },
  {
    path: '',
    name: 'mainLayout',
    component: view('MainLayout', 'layouts'),
    children: [
      {
        path: '/search',
        name: 'search',
        component: view('Search')
      },
      {
        path: '/detail',
        name: 'detail',
        component: view('Detail')
      },
      {
        path: '/read',
        name: 'read',
        component: view('Read')
      }
    ]
  }
]

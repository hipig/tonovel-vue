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
        name: 'HelloWorld',
        component: view('HelloWorld')
      }
    ]
  }
]

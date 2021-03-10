
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/login', component: '../pages/index'},
        {
          path: '/',
          component: '../layouts/securityLayout.js',
          routes: [
            {
              path: '/',
              component: '../pages/home.js',
              routes: [
                { path: '/', component: '../pages/crm.js' },
                { path: '/enterprise', component: '../pages/enterprise.js' },
                { path: '/en', component: '../pages/en.js' },
              ]
            }
          ]
        } ,
      ]
    }
  ],
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:9093',
  //     pathRewrite: { '^/api': '' },
  //     changeOrigin: true
  //   }
  // },
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'app',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

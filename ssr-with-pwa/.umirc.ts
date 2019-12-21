import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  publicPath: './',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'umi-demo',
      dll: true,
      manifest: {
        basePath: '/',
      },
      pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
          importWorkboxFrom: 'local',
        },
      },
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  // ssr: true,
  ssr: {
    externalWhitelist: [/register-service-worker/],
    disableExternal: false,
  },
  treeShaking: true,
}

export default config;

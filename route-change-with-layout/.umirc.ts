import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/page-one', component: '@/pages/PageOne' },
  ],
  layout: {
    name: 'umi'
  }
});

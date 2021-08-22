import {defineConfig} from 'umi';
import routes from "./routes";
export default defineConfig({
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash'
  },
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes
});

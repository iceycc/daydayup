import Vue from 'vue';
import App from './App'

// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ZfMenu from './components/zf-menu';
import ZfMenuItem from './components/zf-menu-item';
import zfSubmenu from './components/zf-submenu';
Vue.component('ZfMenu', ZfMenu)
Vue.component('ZfMenuItem', ZfMenuItem)
Vue.component('zfSubmenu', zfSubmenu)

Vue.use(ElementUI); // 他会将组件注册到全局 Vue.component
new Vue({
    el:'#app',
    render: h => h(App)
})
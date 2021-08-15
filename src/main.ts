import vuetify from '@/ui/plugins/vuetify';
import { router } from '@/ui/router';
import store from '@/store';
import App from '@/ui/app';
import Vue from 'vue';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app');

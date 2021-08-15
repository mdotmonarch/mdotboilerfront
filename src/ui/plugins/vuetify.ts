import Vuetify from 'vuetify/lib';
import Vue from 'vue';
import {
	VApp,
	VMain,
	VContainer,
	VToolbar,
	VCard,
	VCardTitle,
	VCardSubtitle,
	VCardActions,
	VRow,
	VCol

} from 'vuetify/lib';

Vue.use(Vuetify, {
	components: {
		VApp,
		VMain,
		VContainer,
		VToolbar,
		VCard,
		VCardTitle,
		VCardSubtitle,
		VCardActions,
		VRow,
		VCol
	}
});

export default new Vuetify({ });

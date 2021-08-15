import Vue from 'vue';

export default Vue.extend({
	name: 'NavbarComponent',

	data() {
		return { }
	},

	methods: { },

	render(): Vue.VNode {
		return (
			<v-toolbar>
				<h2>Navbar Title</h2>
			</v-toolbar>
		)
	}
})
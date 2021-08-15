import NavbarComponent from '@/ui/components/NavbarComponent';
import Vue from 'vue';
import '@/ui/app.css';

export default Vue.extend({
	name: 'App',

	components: {
		NavbarComponent
	},

	render (): Vue.VNode {
		return (
			<v-app>
				<v-main>
					<navbar-component/>
					<router-view/>
				</v-main>
			</v-app>
		)
	}
})
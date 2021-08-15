import { Post } from '@/domain/post/entity/post.types';
import Vue, {PropOptions} from 'vue';

export default Vue.extend({
	name: 'PostCardComponent',

	props: {
		post: {
			type: Object,
			required: true,
		} as PropOptions<Post>
	},

	data() {
		return { }
	},

	methods: { },

	render(): Vue.VNode {
		return (
			<v-card outlined>
				<v-card-title> {this.post.title} </v-card-title>
				<v-card-subtitle> {this.post.body} </v-card-subtitle>
				<v-card-actions> </v-card-actions>
			</v-card>
		)
	}
})
import PostCardComponent from '@/ui/components/PostCardComponent';
import { Post } from '@/domain/post/entity/post.types';
import Vue from 'vue';

export default Vue.extend({
	name: 'HomePage',

	components: {
		PostCardComponent
	},

	computed: {
		postList(): Post[] { return this.$store.getters['post/postList'] }
	},

	data() {
		return { }
	},

	beforeMount() {
		this.$store.dispatch('post/getPost', {});
	},

	methods: { },

	render(): Vue.VNode {

		const renderPostList = (): JSX.Element[] => {
			return this.postList.map(post => <post-card-component post={post}/>)
		}

		return (
			<v-container>
				<v-row>
					<v-col>
						{renderPostList()}
					</v-col>
				</v-row>
			</v-container>
		)
	}
})
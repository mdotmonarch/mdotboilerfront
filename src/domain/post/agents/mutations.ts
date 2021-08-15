import { Post } from '@/domain/post/entity/post.types';
import { PostState } from '@/domain/post/agents/state';
import { MutationTree } from 'vuex';

const mutations: MutationTree<PostState> = {

	GET(state: PostState, payload: Post[]) {
		state.payload = payload;
	},
};

export default mutations;
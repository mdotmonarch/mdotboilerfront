import PostService, { PostQuery } from '@/domain/post/service/post.service';
import { PostState } from '@/domain/post/agents/state';
import { RootState } from '@/store/store.types';
import { ActionTree } from 'vuex';

const actions: ActionTree<PostState, RootState> = {

	async getPost({ commit }, query: PostQuery) {

		const response = await PostService.get(query);
		if (response.status) {
			commit('GET', response.payload);
		}

	}

};

export default actions;
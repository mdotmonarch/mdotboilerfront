import { PostState } from '@/domain/post/agents/state';
import { RootState } from '@/store/store.types';
import { GetterTree } from 'vuex';

const getters: GetterTree<PostState, RootState> = {
	postList: state => { return state.payload }
};

export default getters;
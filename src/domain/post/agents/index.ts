import mutations from '@/domain/post/agents/mutations';
import actions from '@/domain/post/agents/actions';
import getters from '@/domain/post/agents/getters';
import state from '@/domain/post/agents/state';

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
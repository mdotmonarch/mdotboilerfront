import PostAgents from '@/domain/post/agents';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store ({
	modules: {
		post: PostAgents
	}
})
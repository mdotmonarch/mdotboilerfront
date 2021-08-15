import { Post } from '@/domain/post/entity/post.types';

export type PostState = {
	payload: Post[]
}

export const state = (): PostState => ({
	payload: []
});

export default state;
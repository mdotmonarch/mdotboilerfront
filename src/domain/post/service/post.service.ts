import { Post } from '@/domain/post/entity/post.types';
import http from '@/http-common';

export type PostQuery = {
	id: number | null,
};

export type PostResponse = {
	status: boolean | null,
	payload: Post[] | null,
	error: Error | null
};

export default {
	async get(query: PostQuery): Promise<PostResponse> {

		if (query.id) {
			return http.get<Post>('/posts/'+query.id)
			.then(
				(resp) => {
					return {
						status: true,
						payload: [resp.data],
						error: null
					}
				}
			).catch(
				(error) => {
					return {
						status: false,
						payload: null,
						error: error
					}
				}
			);
		}

		return http.get<Post[]>('/posts/')
		.then(
			(resp) => {
				return {
					status: true,
					payload: resp.data,
					error: null
				}
			}
		).catch(
			(error) => {
				return {
					status: false,
					payload: null,
					error: error
				}
			}
		);
	}
}
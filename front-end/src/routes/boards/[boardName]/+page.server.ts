import { PB_URL, currentUser, pb } from '../../../globals';
import { composeImageURL, serializeNonPOJOs } from '../../../utils';

export async function load({ params, url }){
	let posts : any

	try {
		posts = await pb.collection('posts').getList(1, 50, {
			sort: '-created',
			filter: `board.name = "${params.boardName}"`,
			expand: 'author',
		})
	}
	catch(err){
		console.log(err)
		posts = null
	}

	return {
		boardName: params.boardName,
		posts: serializeNonPOJOs(posts),
	}
}


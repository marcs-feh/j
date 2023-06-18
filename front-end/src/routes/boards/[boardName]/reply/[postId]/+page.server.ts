import { serializeNonPOJOs } from '../../../../../utils';
import { PB_URL, currentUser, pb } from '../../../../../globals';

export async function load({ params, url }){
	let post : any
  let id : any

	try {
		post = await pb.collection('posts').getOne(params.postId, {
			expand: 'author',
		})
    id = (await pb.collection('boards').getFirstListItem(`name = "${params.boardName}"`)).id
	}
	catch(err){
		console.log(err)
		post = null
	}

	return {
		boardName: params.boardName,
    boardId: id,
		post: serializeNonPOJOs(post),
	}
}
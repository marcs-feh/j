import { PB_URL, currentUser, pb } from '../../../../../globals';
import { serializeNonPOJOs } from '../../../../../utils';


export async function load({ params, url }){
	let post : any
	let replies : any

	try {
		post = await pb.collection('posts').getOne(params.postId, {
			expand: 'author',
		})
		
		const filt = `replies.og_post = "${post.id}"`
		console.table(filt)
		replies = await pb.collection('replies').getList(1, 50, {
			sort: '-created',
			// filter: filt,
		})

	}
	catch(err){
		console.table(err)
		post = null
		replies = null
	}

	return {
		boardName: params.boardName,
		post: serializeNonPOJOs(post),
		replies: serializeNonPOJOs(replies.items)
	}
}

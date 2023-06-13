export async function load({ params, url }){
	return {
		boardName: params.boardName,
		postId: params.postId,
	}
}

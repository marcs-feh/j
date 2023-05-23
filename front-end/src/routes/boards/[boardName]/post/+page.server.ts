import { PB_URL, currentUser, pb } from '../../../../globals';

export async function load({ params, url }){
	const id = (await pb.collection('boards').getFirstListItem(`name = "${params.boardName}"`)).id
	return {
		boardID: id,
		boardName: params.boardName,
	}
}

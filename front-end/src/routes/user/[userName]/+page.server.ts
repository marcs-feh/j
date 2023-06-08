import { PB_URL, pb } from "../../../globals";
import { serializeNonPOJOs } from "../../../utils";

export async function load({ params, url }){
	let userInfo:any
	let userPostCount:any
	try {
		userInfo = await pb.collection('users').getFirstListItem(`username = '${params.userName}'`)
	} catch(err){
		console.log(err)
		userInfo = null
	}

	try {
		userPostCount = (await pb.collection('postCount').getFirstListItem(`username = '${params.userName}'`)).postCount
	} catch(err){
		// console.log(err)
		userPostCount = 0
	}

	return {
		"userName": params.userName,
		"userPostCount": serializeNonPOJOs(userPostCount),
		"userInfo": serializeNonPOJOs(userInfo),
	}
}

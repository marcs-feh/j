import { PB_URL, pb } from "../../../globals";
import { serializeNonPOJOs } from "../../../utils";

export async function load({ params, url }){
	let userInfo:any
	try {
		userInfo = await pb.collection('users').getFirstListItem(`username = '${params.userName}'`)
	} catch(err){
		console.log(err)
		userInfo = null
	}
	return {
		"userName": params.userName,
		"userInfo": serializeNonPOJOs(userInfo),
	}
}

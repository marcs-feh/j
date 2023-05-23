// export const csr = true;

export async function load({ params, url }){
	return { boardName: params.boardName }
}


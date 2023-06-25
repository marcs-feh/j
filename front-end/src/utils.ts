export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj)
}

export const composeImageURL = (baseURL : string, name : string, collectionIdOrName : string, recordId : string) : string | null => {
	if(name.length == 0){ return null; }
	// http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME
	let src = `${baseURL}/api/files/${collectionIdOrName}/${recordId}/${name}`
	return src
}



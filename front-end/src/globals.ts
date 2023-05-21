import { writable } from 'svelte/store'
import PocketBase from "pocketbase";

export const PB_URL = 'http://localhost:8090'

export const pb = new PocketBase(PB_URL)

export let currentUser = writable(pb.authStore.model)

pb.authStore.onChange((auth) => {
	currentUser.set(pb.authStore.model)
})


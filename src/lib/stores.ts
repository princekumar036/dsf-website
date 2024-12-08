import { writable } from "svelte/store"

export const release_store = writable([])
export const event_store = writable([])
export const archive_store = writable([])
export const officebearer_store = writable([])

export const archive_pagination_store = writable(1)
// export const release_pagination_store = writable(1)
// export const event_pagination_store = writable(1)
import { client } from "$lib/sanity";
import { release_store, event_store, archive_store, officebearer_store } from "$lib/stores";
import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({ mode: dev ? 'development' : 'production' });

export async function load() {
  // const archive = await client.fetch('*[_type == "archive" && hideOnWebsite != true] | order(created desc)')
  // const release = await client.fetch('*[_type == "release"]')
  // const event = await client.fetch('*[_type == "event"]')
  // const officeBearer = await client.fetch('*[_type == officeBearer]')

  const all = await client.fetch('*')
  
  const release = all.filter(item => item._type == "release")
    .sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))

  const event = all.filter(item => item._type == "event")
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const officeBearer = all.filter(item => item._type == "officeBearer")
    .sort((a, b) => a.order - b.order)
    
  const archive = all.filter(item => item._type == "archive" && item.hideOnWebsite != true)
    .sort((a, b) => new Date(b.created) - new Date(a.created))
  
  release_store.set(release)
  event_store.set(event)
  archive_store.set(archive)
  officebearer_store.set(officeBearer)
}
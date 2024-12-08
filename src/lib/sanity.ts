import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityDetails = {
    projectId: 'smjngdxm',
    dataset: 'db-dsf-website-4kz29f',
    apiVersion: 'v2023-10-21',
    useCdn: true,
}
export const client = createClient(sanityDetails);

const builder = imageUrlBuilder(client)
export function urlFor(source) {
    return builder.image(source)
}

export const components = {
    types: {
        image: ({value}) => `<img src="${urlFor(value).url()}" alt="">`,
        externalImage: ({value}) => `<img src="${value.url}" alt="">`,
    }
}
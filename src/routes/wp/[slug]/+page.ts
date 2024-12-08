
export async function load({ fetch, url }) {
    const id = url.searchParams.get('id');
    
    const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/dsfjnu.wordpress.com/posts/${id}`);
    const data = await response.json();
    if (data) {
      return { data }
    }
    return {
        posts: []
    };
  }
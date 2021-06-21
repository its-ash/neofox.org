// noinspection JSUnresolvedVariable

import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://blog.foxapi.live',
  key: '0b99f9d918af26e6858e84ffa2',
  version: "v3"
});


export async function getPosts({limit, from, to, featured, page}) {
  return await api.posts
    .browse({limit, from, to, featured, page})
    .catch(err => console.error(err));
}

export async function getPost(slug) {
  return await api.posts
    .read({slug})
    .catch(err => console.error(err));
}


export async function getTags() {
  return await api.tags
    .browse()
    .catch(err => {
      console.error(err);
    });
}

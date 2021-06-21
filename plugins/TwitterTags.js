export const TWITTER = (data) => {
  return [
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: data.title
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: data.title
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: data.title
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: data.title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: data.description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: data.coverImage
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: data.title
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: "https://www.neofox.org",
    },
  ]
}

export const TwitterTags = (title, description, coverImage, url) => {
  return [
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: "neofox"
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: title
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: coverImage
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: title
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: url || "https://www.neofox.org",
    },
  ]
}

export const FacebookTags = (title, url, service, description, coverImage, video, latitude, longitude) => {
  return [
    {
      hid: 'og:title',
      property: 'og:title',
      content: title
    },
    {
      hid: "og:url",
      name: "og:url",
      content: url || 'https://www.neofox.org',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: service || 'Website'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: description
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: 'NEOFOX'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: coverImage
    },
    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: coverImage
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: title
    },
    {
      hid: 'fb:app_id',
      name: 'fb:app_id',
      content: '543522706280706',
    },
    {
      hid: 'fb:admins',
      name: 'fb:admins',
      content: '543522706280706',
    },
    {
      hid: 'og:video',
      name: 'og:video',
      content: video,
    },
    {
      hid: 'og:video:height',
      name: 'og:video:height',
      content: '640',
    },
    {
      hid: 'og:video:width',
      name: 'og:video:width',
      content: 385,
    },
    {
      hid: 'og:video:type',
      name: 'og:video:type',
      content: 'video/mp4',
    },
    {
      hid: 'og:latitude',
      name: 'og:latitude',
      content: latitude,
    },
    {
      hid: 'og:longitude',
      name: 'og:longitude',
      content: longitude,
    },
    {
      hid: 'og:locality',
      name: 'og:locality',
      content: 'Jaipur',
    },
    {
      hid: 'og:region',
      name: 'og:region',
      content: 'RJ',
    },
    {
      hid: 'og:country-name',
      name: 'og:country-name',
      content: 'INDIA',
    },
    {
      hid: 'og:postal-code',
      name: 'og:postal-code',
      content: '302017',
    },
    {
      hid: 'og:locale',
      name: 'og:locale',
      content: 'en_IN',
    },

  ]
}

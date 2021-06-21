export const HtmlTags = (title, description, keywords, color) => {
  return [
    {
      hid: 'title', name: 'title',
      content: title,
    },
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: keywords,
    },
    {
      hid: 'language',
      name: 'language',
      content: 'EN'
    },
    {
      hid: 'Classification',
      name: 'Classification',
      content: 'Business'
    },
    {
      hid: 'designer',
      name: 'designer',
      content: 'NEOFOX'
    },
    {
      hid: 'coverage',
      name: 'coverage',
      content: 'Worldwide'
    },
    {
      hid: 'subtitle',
      name: 'subtitle',
      content: description,
    },
    {
      hid: 'language',
      name: 'language',
      content: 'EN'
    },
    // Android Tags
    {
      hid: 'theme-color',
      name: 'theme-color',
      content: color,
    },
    // End Android
    {
      hid: 'nightmode',
      name: 'nightmode',
      content: 'enable'
    },
  ]
}

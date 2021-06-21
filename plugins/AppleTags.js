export const AppleTags = (title, color) => {
  return [
    {
      hid: 'apple-mobile-web-app-title',
      property: 'apple-mobile-web-app-title',
      content: title
    },
    {
      hid: 'apple-mobile-web-app-status-bar-style',
      property: 'apple-mobile-web-app-status-bar-style',
      content: color
    },
  ]
}

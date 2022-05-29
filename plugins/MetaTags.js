import {AppleTags} from "@/plugins/AppleTags";
import {FacebookTags} from "@/plugins/FacebookTags";
import {HtmlTags} from "@/plugins/HtmlTags";
import {TwitterTags} from "@/plugins/TwitterTags";

export const SEO = (title, service, description, keywords, coverImage, faq = {}, url, video, color = "#fefefe", latitude = 26.9124, longitude = 75.7873) => {
  return {
    title: title,
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow'
      },
      {
        hid: 'revisit-after',
        name: 'revisit-after',
        content: '1 day'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'neofox'
      },
      ...AppleTags(title, color),
      ...FacebookTags(title, url, service, description, coverImage, video, latitude, longitude),
      ...HtmlTags(title, description, keywords, color),
      ...TwitterTags(title, description, coverImage, url)
    ],
    script: [

      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "publisher": {
            "@type": "ProfilePage",
            "name": "NEOFOX"
          }
        }
      },
      {
        type: 'application/ld+json',
        json:
          {
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "NEOFOX",
            "url": "https://www.neofox.org",
            "logo": "https://www.neofox.org/favicon.png",
            "openingHours": "Mo 08:00-20:00 Tu 08:00-20:00 We 08:00-20:00 Th 08:00-20:30 Fr 08:30-20:00 Sa 08:00-20:00",
            "sameAs": [
              "https://www.facebook.com/neofox.org",
              "https://www.instagram.com/neofoxindia/",
              "https://github.com/neofoxindia",
              "https://www.neofox.in",
              "https://www.linkedin.com/company/neofoxin/",
              "https://dribbble.com/theneofox",
              "https://www.figma.com/@neofox",
              "https://www.pinterest.com/theneofox"
            ]
          }
      },
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service,
          "description": description,
          "provider": {
            "@type": "Organization",
            "name": "NeoFox",
            "sameAs": "https://www.neofox.org",
          }
        }
      },
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": Object.keys(faq).map(question => {
              return {
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq[question]
                }
              }
            }
          )
        }
      },
    ]
  }
}


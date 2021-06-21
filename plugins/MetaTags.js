import {AppleTags} from "@/plugins/AppleTags";
import {FacebookTags} from "@/plugins/FacebookTags";
import {HtmlTags} from "@/plugins/HtmlTags";
import {TwitterTags} from "@/plugins/TwitterTags";

export const SEO = (title, service, description, keywords, color, coverImage, video, url, latitude = 26.9124, longitude = 75.7873) => {
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
        json:
          {
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "NEOFOX",
            "url": "https://www.neofox.org",
            "logo": "https://www.neofox.org/favicon.png",
            "openingHours": "Mo 08:00-20:00 Tu 08:00-20:00 We 08:00-20:00 Th 08:00-20:30 Fr 08:30-20:00 Sa 08:00-20:00",
            "sameAs": [
              "https://www.facebook.com/neofox.in/",
              "https://www.instagram.com/neofox.in/",
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
      }
    ]
  }
}


// {
//     type: 'application/ld+json', json: {
//     "@context": "https://schema.org",
//         "@type": "FAQPage",
//         "mainEntity": [{
//         "@type": "Question",
//         "name": "What can you help me with?",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "With whatever we can. Preparing cost analysis, establishing team roles, creating roadmaps. Defining business goals, key business values, target users, main features, prioritising. We can find you similar projects that are already active on the market to benchmark against. We can assist you with creating user personas, mock-ups, user stories, time frame, establishing project status and preparing project estimation. We'll be happy to outline project specification, prepare wireframes, details concerning integrations with external services, API documentation, required features list."
//         }
//     }, {
//         "@type": "Question",
//         "name": "What can you help me with?",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "If you have an idea contact us by our <a href='https://neofox.in/contact'>online form</a> , e-mail or phone. We'll meet and talk it over. Just be sure to prepare as much info about your idea as possible, it will smoothen the meeting and benefit further cooperation. If you don't know how to get around to it, go ahead and read our blog entry on how to write a project brief."
//         }
//     }, {
//         "@type": "Question",
//         "name": "What do I need to know before contacting you?",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Well, the most important thing to know is what do you want to accomplish. Why do I need data software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application. You don't want to spend many months developing it with us without being sure what you need. "
//         }
//     }, {
//         "@type": "Question",
//         "name": "How much time will it take for you to make my app?",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "To give you a precise answer we must prepare a project scope and create a budget. We shall tell you how much of that scope can be completed within the budget and we'll be able to estimate how long will it take after at least a month of work. Don't worry, if you're not happy with our work after two weeks you can retract from the project with no penalties, data is our trial period and we believe that any reliable software house should give you one."
//         }
//     }, {
//         "@type": "Question",
//         "name": "How do you guarantee product quality?",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "We evaluate the result after every two weeks, we test our work (we conduct both development and acceptance tests), we present it to you, we apply your feedback so you know you get what you are paying for."
//         }
//     },
//         {
//             "@type": "Question",
//             "name": "How much do you charge?",
//             "acceptedAnswer": {
//                 "@type": "Answer",
//                 "text": "It depends on many things: project scope, time spent on the project and technological issues. We know it sounds vague but its simply honest. Remember that each software project is different, especially if you had a particularly original idea. We do not want to give you an unrealistic estimate, instead we want to provide you with the best quality possible within your budget."
//             }
//         }]
// }
// },

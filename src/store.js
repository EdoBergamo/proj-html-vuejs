import { reactive } from "vue";

export const store = reactive({
  header: [
    {
      id: 1,
      label: "Home",
      href: '/',
      active: true,
      dropdown: [],
      badge: false
    },
    {
      id: 2,
      label: "Services",
      href: '/',
      active: false,
      dropdown: ['All services', 'Service Single Page'],
      badge: false,
    },
    {
      id: 3,
      label: "About",
      href: '/',
      active: false,
      dropdown: ['About me', 'Our sponsor', 'Contact'],
      badge: false,
    },
    {
      id: 4,
      label: "Videos",
      href: '/',
      active: false,
      dropdown: ['All Playlist', 'Playlist Page', 'Video Single Page'],
      badge: false,
    },
    {
      id: 5,
      label: "Blog",
      href: '/',
      active: false,
      dropdown: false,
      badge: false,
    },
    {
      id: 6,
      label: "Store",
      href: '/',
      active: false,
      dropdown: ['Simple Product', 'Variable Product'],
      badge: true,
    },
  ],

  footer: [],
  title_articles: 'Latest articles',
  view_all_articles: 'Read all articles',
  articles: [{
    img: 'https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/blog4@2x-600x386.jpg',
    name: 'The best protein shake',
    sub_title: 'Published On: November 26th, 2019 | 2 Comments',
  },
  {
    img: 'https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/blog1@2x-600x386.jpg',
    name: 'Ultimate cardio workout',
    sub_title: 'Published On: November 26th, 2019 | 0 Comments',
  },
  {
    img: 'https://avada.website/fitness/wp-content/uploads/sites/130/2019/11/blog3@2x-600x386.jpg',
    name: 'New juices available now',
    sub_title: 'Published On: November 26th, 2019 | 0 Comments',
  }

  ],
});
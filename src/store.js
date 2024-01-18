import { reactive } from "vue";

export const store = reactive({
  header: [
    {
      id: 1,
      label: "Home",
      href: '/',
      active: true,
      dropdown: [],
    },
    {
      id: 2,
      label: "Services",
      href: '/',
      active: false,
      dropdown: ['All services', 'Service Single Page'],

    },
    {
      id: 3,
      label: "About",
      href: '/',
      active: false,
      dropdown: ['About me', 'Our sponsor', 'Contact'],

    },
    {
      id: 1,
      label: "Videos",
      href: '/',
      active: false,
      dropdown: ['All Playlist', 'Playlist Page', 'Video Single Page'],

    },
    {
      id: 1,
      label: "Blog",
      href: '/',
      active: false,
      dropdown: false,

    },
    {
      id: 1,
      label: "Store",
      href: '/',
      active: false,
      dropdown: ['Simple Product', 'Variable Product'],

    },
  ],

  footer: []
});
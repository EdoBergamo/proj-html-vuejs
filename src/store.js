import { reactive } from "vue";

export const store = reactive({
  header: [
    {
      id: 1,
      label: "Home",
      href: '/',
      active: true
    },
    {
      id: 2,
      label: "Services",
      href: '/',
      active: false
    },
    {
      id: 3,
      label: "About",
      href: '/',
      active: false
    },
    {
      id: 1,
      label: "Videos",
      href: '/',
      active: false
    },
    {
      id: 1,
      label: "Blog",
      href: '/',
      active: false
    },
    {
      id: 1,
      label: "Store",
      href: '/',
      active: false
    },
  ],

  footer: []
});
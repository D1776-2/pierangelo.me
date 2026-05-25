import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://pierangelo-me.pages.dev/",
    title: "Pierangelo",
    description: "Visual designer with a background in communication, editorial design and interactive systems.",
    author: "Pierangelo Sabatino",
    profile: "https://pierangelo.me",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/rome",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/D1776-2/pierangelo.me/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    //{ name: "github",   url: "https://github.com/D1776-2/" },
    { name: "instagram",        url: "https://www.instagram.com/pierangelosabatino/" },
    { name: "linkedin", url: "https://www.linkedin.com/in/pierangelosabatino/" },
    { name: "youtube",     url: "https://www.youtube.com/@PierangeloSabatino/videos" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
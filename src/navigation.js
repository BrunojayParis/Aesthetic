import { getPermalink} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Servicios',
      href:  getPermalink('/services'),
    },
  ],
  actions: [{ text: 'Contactanos', href: getPermalink('/contact'), target: '' }],
};

export const footerData = {
  links: [
   
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/BrunojayParis"> Bruno Paris</a> · All rights reserved.
  `,
};

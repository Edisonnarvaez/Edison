


type NavItemType = {
  id: number;
  title: string;
  to: string;
};

type NavbarType = {
  logo: {
    title: string;
  };
  nav: NavItemType[];
};

type LanguageType = {
  label: string;
  code: string;
};

export const dataNavbar = (): NavbarType => ({
  logo: {
    title: 'EDISON NARVAEZ',
  },
  nav: [
    {
      id: 1,
      title: 'Beginning',
      to: '/Beginning',
    },
    {
      id: 2,
      title: 'About',
      to: '/About',
    },
    {
      id: 3,
      title: 'Interests',
      to: '/Interests',
    },
    {
      id: 4,
      title: 'Projects',
      to: '/Projects',
    },
    {
      id: 5,
      title: 'Skills',
      to: '/Skills',
    },
    {
      id: 6,
      title: 'Experience',
      to: '/Experience',
    },
    {
      id: 7,
      title: 'Studies',
      to: '/Studies',
    },
    {
      id: 8,
      title: 'Contact',
      to: '/Contact',
    },
  ],
});

export const languageData = (): LanguageType[] => [
  { label: 'English', code: 'en' },
  { label: 'Spanish', code: 'es' },
];

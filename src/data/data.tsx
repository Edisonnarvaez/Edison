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
      title: 'beginning',
      to: '/beginning',
    },
    {
      id: 2,
      title: 'about',
      to: '/about',
    },
    {
      id: 3,
      title: 'interests',
      to: '/interests',
    },
    {
      id: 4,
      title: 'projects',
      to: '/projects',
    },
    {
      id: 5,
      title: 'skills',
      to: '/skills',
    },
    {
      id: 6,
      title: 'experience',
      to: '/experience',
    },
    {
      id: 7,
      title: 'studies',
      to: '/studies',
    },
    {
      id: 8,
      title: 'contact',
      to: '/contact',
    },
  ],
});

export const languageData = (): LanguageType[] => [
  { label: 'English', code: 'en' },
  { label: 'Spanish', code: 'es' },
];

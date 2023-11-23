import { create } from 'zustand';

interface NavbarState {
  navbarItemActive: number;
  navTitle: string;
  selectedItemNavbar: (navItem: number) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  navbarItemActive: 1,
  navTitle: 'Hi!!',
  selectedItemNavbar: (navItem: number) => {
    set({ navbarItemActive: navItem });
  },
}));

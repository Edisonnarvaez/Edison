import { NavLink } from 'react-router-dom';

import { useNavbarStore } from '../store/navbarStore';

const Footer = () => {
  const { navbarItemActive, selectedItemNavbar } = useNavbarStore();

  return (
    <footer className='flex flex-row items-center justify-between px-8 text-sm text-white bg-black-900'>
      <span>
        © 2023 Edson Stiven Narvaez Paz
      </span>
      <ul className='flex gap-11'>
        <NavLink
          to='/Beginning'
          onClick={() => {
            selectedItemNavbar(1);
          }}
          className={navbarItemActive === 2 ? 'underline' : 'no-underline'}
        >
          Beginning
        </NavLink>
        <li>About</li>
        <li>Interests</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Studies</li>
        <li>Contact</li>
      </ul>
    </footer>
  );
};

export default Footer;

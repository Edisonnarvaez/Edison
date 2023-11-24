import { NavLink } from 'react-router-dom';
import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';

import {FaDownload} from 'react-icons/fa6';

const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar } = useNavbarStore();

  return (
    <nav className='flex flex-col items-center  min-w-[250px] bg-black-950 '>
      <ul className='flex flex-row gap-x-6 pt-5 pl-8 pb-5'>
        {dataNavbar().nav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to.toLowerCase()}
            className='flex flex-row items-center text-app-gray-700'
            onClick={() => {
              selectedItemNavbar(item.id);
            }}
          >
            <span
              className={`ml-3 text-base font-medium ${
                item.id === navbarItemActive
                  ? 'text-app-gray-50 p-3 rounded bg-black-800'
                  : 'text-app-gray-700'
              }`}
            >
              {item.title}
            </span>
          </NavLink>
        ))},
        <li>
          <button className='flex items-center text-app-gray-700 bg-white p-2 rounded'><FaDownload className='mr-2' /><span className='text-black'>Download CV</span></button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavLinkClick = (link) => {
    const section = document.getElementById(link);
    setNav(false);  // Close the mobile nav after clicking a link
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
      <div>
        <h1 className='text-5xl font-signature m-2'>
          <strong>Harsh</strong>
        </h1>
      </div>

      {/* Toggle the nav on small screens */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul className={`md:flex ${isSmallScreen ? 'hidden' : 'justify-center items-center'}`}>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200' onClick={() => handleNavLinkClick(link)}>
            {link}
          </li>
        ))}
      </ul>

      {nav && isSmallScreen && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 py-6 text-4xl' onClick={() => handleNavLinkClick(link)}>
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

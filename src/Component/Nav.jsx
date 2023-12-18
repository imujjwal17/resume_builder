import React from 'react';
import cv from '../assets/cv.png';
import Button from './button';

const navLinks = [
  { id: 1, text: 'HOME' },
  { id: 2, text: 'ABOUT US' },
  { id: 3, text: 'PRICING' },
  { id: 4, text: 'TEMPLATES' },
  { id: 5, text: 'CONTACT' },
];

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-100 p-6 flex flex-row z-10">
      <div className="flex items-center">
        <img src={cv} alt="Logo" className="w-10 h-10.5" />
        <span className="text-2xl ml-2 font-montserrat font-bold">Resume Builder</span>
      </div>
      <div className="">
        <ul className="hidden md:flex space-x-20 mt-2 ml-40">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:text-blue-500 cursor-pointer">
              {link.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-x-4 ml-auto flex mr-5">
        <Button title="LOG IN" />
      </div>
    </nav>
  );
};

export default Nav;

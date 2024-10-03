import React from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
const navElements = [
  {
    id:1,
    names:"Client",
    address:'',
    href:'https://www.google.com',
  },
  {
    id:2,
    names:"Sourcing",
    address:''
  },
  {
    id:3,
    names:"Dealership",
    address:''
  },
  {
    id:4,
    names:"Maintenance Hub",
    address:''
  },
  {
    id:5,
    names:"Crypto Markets",
    address:''
  },
  {
    id:6,
    names:"Admin",
    address:''
  },
  //Navbar Elements
];

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial gap-10">
        <li><a href="https://crypto.com/price" target="_blank">Client</a></li>
        <li><a href="https://portfolio.metamask.io/" target="_blank">Sourcing</a></li>
        <li><a href="https://portfolio.metamask.io/buy/build-quote" target="_blank">Maintenance</a></li>
        <li><a href="https://portfolio.metamask.io/buy/build-quote" target="_blank">Markets</a></li>
        <li><a href="https://portfolio.metamask.io/buy/build-quote" target="_blank">Admin</a></li>
        
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {navElements.map((item, index) => (
          <li className={'mx-4 cursor-pointer'} key={item.id}>{item.names}</li>
        ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


import { PiChatsCircle } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus, FaHome, FaSearch, FaUsers } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";

import { RiUser3Line } from "react-icons/ri";

import { useState } from 'react';
import style from './style.module.css'


const mainLinksData = [
  { icon: <HiOutlineHome />, label: 'Bosh sahifa' },
  { icon: <IoSearchOutline />, label: 'Katalog' },
  { icon: <RiShoppingCartLine />, label: 'Savat' },
  { icon: <RiUser3Line />, label: 'Profil' },
];

export const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <nav className={style.sidebar}>
      {mainLinksData.map((link, i) => {
        return <div 
          key={link.label} 
          className={style.sideLink} 
          data-active={activeIndex === i || undefined}
          onClick={() => setActiveIndex(i)}
        >
          <>{link.icon}</>
          <span>{link.label}</span>
        </div>
      })}
    </nav>
  )
}

import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";

import { RiUser3Line } from "react-icons/ri";

import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import useStore from "../../store";
import { Center } from "@mantine/core";

const mainLinksData = [
  { icon: <HiOutlineHome />, label: "Bosh sahifa", to: "/" },
  { icon: <IoSearchOutline />, label: "Katalog", to: "/catalog" },
  { icon: <RiShoppingCartLine />, label: "Savat", to: "/cart" },
  { icon: <RiUser3Line />, label: "Profil", to: "/profile" },
];

export const Sidebar = () => {
  const cart = useStore((state) => state.cart);

  return (
    <nav className={style.sidebar}>
      {mainLinksData.map((link) => {
        return (
          <NavLink key={link.label} to={link.to} className={style.sideLink}>
            <>{link.icon}</>
            <span>{link.label}</span>

            {link.to === "/cart" && !!cart?.length && (
              <Center
                pos="absolute"
                top="5px"
                right="10px"
                bg="green.8"
                w="18px"
                h="18px"
                style={{ borderRadius: "50%", fontSize: "12px" }}
                fw="700"
                c="white"
              >
                {!!cart?.length && cart.reduce((prevVal,currProduct) => {
                 return prevVal + currProduct.count; 
                },0)}
              </Center>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

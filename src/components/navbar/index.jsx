import { HiOutlineHome } from "react-icons/hi";
import { IoBookmark, IoSearchOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";

import { RiUser3Line } from "react-icons/ri";

import style from "./style.module.css";
import { NavLink, useLocation } from "react-router-dom";
import useStore from "../../store";
import { Center } from "@mantine/core";
import { CheckoutBtn } from "../../pages/cart/components/checkout-btn";

const mainLinksData = [
  { icon: <IoSearchOutline />, label: "Главная", to: "/" },
  { icon: <IoBookmark />, label: "Мой список", to: "/shopping-list" },
  { icon: <HiOutlineHome />, label: "Магазины", to: "/shop" },
  { icon: <RiUser3Line />, label: "Вход", to: "/login" },
  { icon: <RiShoppingCartLine />, label: "Корзина", to: "/cart" },
];

export const Navbar = () => {
  const cart = useStore((state) => state.cart);

  const {pathname} = useLocation()

  if(pathname === '/checkout') return null

  return (
    <div className={style['navbar-wrapper']}>
      {/* {!!cart?.length  && <CheckoutBtn />} */}
      <nav className={style.navbar}>
        {mainLinksData.map((link) => {
          return (
            <NavLink key={link.label} to={link.to} className={style.sideLink}>
              <>{link.icon}</>
              <span>{link.label}</span>

              {link.to === "/cart" && !!cart?.length && (
                <Center
                  pos="absolute"
                  top="-0px"
                  right="15px"
                  bg="red.8"
                  w="23px"
                  h="23px"
                  style={{ borderRadius: "50%", fontSize: "12px" }}
                  fw="700"
                  c="white"
                  bd="3px solid white"
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
    </div>
  );
};

import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";

import { RiUser3Line } from "react-icons/ri";

import style from "./style.module.css";
import { useLocation } from "react-router-dom";
import { Button, Flex, Text } from "@mantine/core";
import useStore from "../../../../store";

const mainLinksData = [
  { icon: <HiOutlineHome />, label: "Bosh sahifa", to: "/" },
  { icon: <IoSearchOutline />, label: "Katalog", to: "/catalog" },
  { icon: <RiShoppingCartLine />, label: "Savat", to: "/cart" },
  { icon: <RiUser3Line />, label: "Profil", to: "/profile" },
];

export const CheckoutBtn = () => {

  let location = useLocation();

  if(!location.pathname.includes('cart')) return null;
  return (
    <nav className={style['checkout-btn']}>
      <Flex direction="column">
        <Text size="18px" fw="700" c="dark">140000 s&apos;om</Text>
        <Text size="14px" fw="500" c="gray">7 mahsulotlar</Text>
      </Flex>

      <Button bg="green.8" radius="10px">Rasmiylashtirish</Button>
    </nav>
  );
};

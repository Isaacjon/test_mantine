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

  const cart = useStore((state)=> state.cart)
  
  let location = useLocation();

  if(!location.pathname.includes('cart')) return null;

  const {sum, amount} = cart?.reduce((prev, Curr)=>{
       return {
        sum: (prev.sum + (Curr.price * Curr.count))?.toFixed(2),
        amount:  prev.amount + Curr.count
       }
  }, {sum: 0, amount: 0}) || {}
  return (
    <nav className={style['checkout-btn']}>
      <Flex direction="column">
        <Text size="18px" fw="700" c="dark">{sum} s&apos;om</Text>
        <Text size="14px" fw="500" c="gray" mt="5px">{amount} mahsulotlar</Text>
      </Flex>

      <Button bg="green.8" radius="10px">Rasmiylashtirish</Button>
    </nav>
  );
};

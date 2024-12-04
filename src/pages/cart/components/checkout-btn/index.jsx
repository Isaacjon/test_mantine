import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";

import { RiUser3Line } from "react-icons/ri";

import style from "./style.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Flex, Stack, Text } from "@mantine/core";
import useStore from "../../../../store";

const mainLinksData = [
  { icon: <HiOutlineHome />, label: "Bosh sahifa", to: "/" },
  { icon: <IoSearchOutline />, label: "Katalog", to: "/catalog" },
  { icon: <RiShoppingCartLine />, label: "Savat", to: "/cart" },
  { icon: <RiUser3Line />, label: "Profil", to: "/profile" },
];

export const CheckoutBtn = ({ title, onClick }) => {

  const cart = useStore((state)=> state.cart)
  const navigate = useNavigate()
  
  // let location = useLocation();

  // if(!location.pathname.includes('cart')) return null;

  const {sum, amount} = cart?.reduce((prev, Curr)=>{
       const price = Curr?.currentPrice || Curr?.originalPrice
        console.log('test ', {price, count: Curr.count, sum: prev.sum})
       return {
        sum: (+prev.sum + (price * Curr.count))?.toFixed(2),
        amount:  prev.amount + Curr.count
       }
  }, {sum: 0, amount: 0}) || {}

  const goToCheckout = () => onClick?.() || navigate("/checkout")

  return (
      <Stack>

        <Flex direction="column" mt="32px" c="#21282b">
          <Flex justify="space-between">
            <Text lh="18px" fz="14px">Товары ({amount}) – 34,24 кг</Text>
            <Text lh="18px" fz="14px">{sum} ₸</Text>
          </Flex>
          <Flex justify="space-between" mt="10px">
            <Text fw="600" fz="20px" lh="32px">Итого</Text>
            <Text fw="600" fz="20px" lh="32px">{sum} ₸</Text>
          </Flex>
        </Flex>

        <Button c="#fff" fz="16px" bg="dark.7" radius="4px" h="48px" onClick={goToCheckout}>{title || "Перейти к оформлению"}</Button>

        <Text fz="12px" c="#919395">Дата и стоимость доставки или самовывоза определяются при оформлении заказа</Text>
      </Stack>

  );
};

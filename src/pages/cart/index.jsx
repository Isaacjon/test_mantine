import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { HiOutlineTrash } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import useStore from "../../store";
import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { CheckoutBtn } from "./components/checkout-btn";
import { CartItem } from "./components/CartItem";
import { EmptyCart } from "./components/EmptyCart";

const imgUrl =
  "https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-illustration-download-in-svg-png-gif-file-formats--no-records-list-record-emply-data-user-interface-pack-design-development-illustrations-6430781.png?f=webp";

export const Cart = () => {
  const cart = useStore((state) => state.cart);
  const cartLength = useStore((state) => state.cartLength);
  const store = useStore((state) => state);


  const h = !!cart.length ? `(184px + 0px)` : "(184px)";
  const [selected, setSelected] = useState([])

  const handleSelect = (product) => (selected) => () => {
      if(!selected) setSelected(pre => [...pre, product])
      else setSelected(pre => pre.filter(item => item.id !== product.id))
  }

  const isSelected = (product) => {
   return selected.find(item => item.id === product.id)
  }

  const selectAll = (event) => {
    const isChecked = event?.target?.checked

    if(isChecked) {
      setSelected([...cart])
    } else {
      setSelected([])
    }
  }

  const handleDeleteSelected = () => {
    selected.forEach(item => store.removeFromCart(item))
    setSelected([])
  }

  return (
    <Stack className="qeqweqe" mih={`calc(100vh - ${h})`} gap="0">
      {!cart?.length ? (
        <EmptyCart />
      ) : (
        <Stack bg="white" p="16px" style={{ borderRadius: "8px" }}>
          <Flex align="center" justify="space-between">
            <Text fw="700" size="22px">
              Корзина
            </Text>
          </Flex>

          <Flex
            p="10px"
            mb="20px"
            align="center"
            bg="#f5f4f1"
            style={{ borderRadius: "4px" }}
          >
            <Checkbox
              color="black"
              size="md"
              styles={{
                body: { alignItems: "center" },
                label: {
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                },
              }}
              fz="40px"
              label="Я юридическое лицо"
              w="100%"
            />
          </Flex>

          <Flex>
            <Text fz="14px">{cartLength} товара</Text>
            <Text mx="5px" fz="14px" c="gray" style={{ transform: "scale(1)" }}>
              •
            </Text>
            <Text fz="14px">Вес</Text>
            <Text fz="14px" c="gray" ml="5px">
              {" "}
              — 13,707 кг
            </Text>
          </Flex>

          <Stack>
            <Flex justify="space-between">
              <Checkbox
                color="black"
                size="20px"
                styles={{
                  body: { alignItems: "center" },
                  label: {
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                  },
                }}
                fz="40px"
                label="Выбрать все"
                onClick={selectAll}
              />
              {!!selected?.length && <Button onClick={handleDeleteSelected} fw="500" c="red.8" h="max-content" w="max-content" variant="white" p="0">Удалить выбранные</Button>}
            </Flex>
            <Box w="100%" h="1px" bg="gray.4" my="10px" />
          </Stack>

          <Stack>
            {cart?.map((pro, i, arr) => {
              return (
                <CartItem
                  key={pro.name}
                  item={pro}
                  onClick={handleSelect(pro)}
                  selected={isSelected(pro)}
                />
              );
            })}
          </Stack>

          <CheckoutBtn />
        </Stack>
      )}


    </Stack>
  );
};


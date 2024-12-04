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

const CartItem = ({ item, selected = false, onClick }) => {

  const store = useStore((state) => state);

  item.price = item?.currentPrice || item?.originalPrice;

  return (
    <>
      <Flex>
        <Checkbox color="black" mr="5px" checked={selected} onClick={onClick(selected)} />

        <Box h="75px" miw="75px" w="75px" pos="relative" bg="#f5f5f5">
          <Image
            fit="contain"
            src={item.image}
            style={{ aspectRatio: 1 }}
            alt={item.name}
          />
        </Box>

        <Stack ml="15px" gap="0" h="auto">
          <Text size="10px" fw="500" mb="5px" lineClamp={2}>
            Арт. 14047010
          </Text>

          <Text size="13px" fw="500" lineClamp={2}>
            {item.name}
          </Text>

          <Stack gap="0" mt="auto">
            {item.originalPrice && (
              <Text c="black" td="line-through" size="12px" mt="10px">
                {(item.originalPrice * item.count).toFixed(2)} ₸
              </Text>
            )}
            <Text
              c={item.onSale ? "#b82825" : "#333"}
              fw={700}
              size="xl"
              mt="8px"
              w="max-content"
              bg={item.onSale && "#ffed00"}
            >
              {(item.currentPrice * item.count).toFixed(2)} <Text component="span" fz="15px">₸</Text>
            </Text>
            <Text c="black" size="12px" mt="2px">
                {item.currentPrice || item.originalPrice}₸/шт.
            </Text>
          </Stack>
        </Stack>

        <Center
          style={{ alignSelf: "flex-start", cursor: 'pointer' }}
          ml="auto"
          p="0px 0 10px 10px"
          onClick={() => store.removeFromCart(item, true)}
        >
          <HiOutlineTrash />
        </Center>
      </Flex>

      <Flex
        justify="space-between"
        w="150px"
        bd="1px solid gray.5"
        style={{ alignSelf: "center", borderRadius: "4px" }}
      >
        <Center
          w="35px"
          h="35px"
          style={{ cursor: "pointer" }}
          onClick={() => store.removeFromCart(item)}
        >
          <TbMinus size="20px" />
        </Center>
        <Text size="16px" w="35px" h="35px" lh="240%" ta="center">
          {item.count || 1}
        </Text>
        <Center
          w="35px"
          h="35px"
          style={{ cursor: "pointer" }}
          onClick={() => store.addToCart(item)}
        >
          <GoPlus size="20px" />
        </Center>
      </Flex>
    </>
  );
};

const EmptyCart = () => {
  const navigate = useNavigate();
  const goToCatalogs = () => navigate("/catalog");

  return (
    <Box m="auto" maw="70%" ta="center">
      <RiErrorWarningLine color="#ccc6b8" size="50px" />
      <Text mt="15px" c="#919395" size="20px" fw="600" ta="center">
        В корзине пусто
      </Text>
      <Text c="#919395" fw="500" ta="center" mt="10px" lh="150%">
        Перейдите в каталог, чтобы добавить нужные товары
      </Text>
      <Button
        m="20px auto"
        color="#e3e1d8"
        c="#21282b"
        fw="700"
        size="md"
        radius="4px"
        h="48px"
        onClick={goToCatalogs}
      >
        Перейти в каталог
      </Button>
    </Box>
  );
};

const Footer = () => {
  return (
    <>
      footer
    </>
  )
}

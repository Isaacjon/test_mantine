import { Box, Center, Checkbox, Flex, Group, Image, Stack, Text } from "@mantine/core";
import useStore from "../../../store";
import { HiOutlineTrash } from "react-icons/hi2";
import { TbMinus } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const CartItem = ({ noSelection, item, selected = false, onClick }) => {

  const navigate = useNavigate()
  const store = useStore((state) => state);

  const goBuy = (e) => {
    e?.stopPropagation?.()
    navigate('/cart')
  }

  const handleRemove = (e) => {
    e?.stopPropagation?.()
    store.removeFromCart(item)
  }
  const handleAdd = (e) => {
    e?.stopPropagation?.()
    store.addToCart(item)
  }

  const productDetails = () => {
    navigate(`/product/${item?.id}`)
  }

  const handleDelete = (e) => {
    e?.stopPropagation?.()
    
    if(noSelection) {
      return store.bookmarkProduct(item)
    }

    store.removeFromCart(item, true)
  }
  
  item.price = item?.currentPrice || item?.originalPrice;

  return (
    <>
      <Flex style={{cursor: 'pointer'}} onClick={productDetails}>
        {!noSelection && (
          <Checkbox
            color="black"
            mr="5px"
            checked={selected}
            onClick={onClick(selected)}
          />
        )}

          {/* image */}
        <Box h="75px" miw="75px" w="75px" pos="relative" bg="#f5f5f5">
          <Image
            fit="contain"
            src={item.image}
            style={{ aspectRatio: 1 }}
            alt={item.name}
          />
        </Box>
          {/* image */}


        <Stack ml="15px" gap="0" h="auto" align="flex-start">
         
          {/* title */}
          <Text size="10px" fw="500" mb="5px" lineClamp={2}>
            Арт. 14047010
          </Text>

          <Text size="13px" fw="500" lineClamp={2}>
            {item.name}
          </Text>
          {/* title */}

          {/* price */}
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
              {(item.currentPrice * item.count).toFixed(2)}{" "}
              <Text component="span" fz="15px">
                ₸
              </Text>
            </Text>
            <Text c="black" size="12px" mt="2px">
              {item.currentPrice || item.originalPrice}₸/шт.
            </Text>
          </Stack>

          {/* action btns */}
          <Flex
            justify="space-between"
            w="150px"
            mt="20px"
            bd="1px solid gray.5"
            style={{ borderRadius: "4px" }}
          >
            <Center
              w="35px"
              h="35px"
              style={{ cursor: "pointer" }}
              onClick={handleRemove}
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
              onClick={handleAdd}
            >
              <GoPlus size="20px" />
            </Center>
          </Flex>
        </Stack>

        <Stack justify="space-between" ml="auto">
          <Center
            style={{ alignSelf: "flex-start", cursor: "pointer" }}
            ml="auto"
            p="0px 0 10px 10px"
            onClick={handleDelete}
          >
            <HiOutlineTrash />
          </Center>

          {noSelection && (
            <Center
              onClick={goBuy}
              p="5px"
              bg="dark"
              w="38px"
              h="38px"
              style={{ borderRadius: "5px", cursor: "pointer" }}
              c="white"
            >
              <RiShoppingCartLine size="20px" />
            </Center>
          )}
        </Stack>
      </Flex>
    </>
  );
};
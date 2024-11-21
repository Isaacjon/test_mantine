import { Box, Center, Flex, Image, Stack, Text } from "@mantine/core";
import { HiOutlineTrash } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import useStore from "../../store";

const imgUrl =
  "https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-illustration-download-in-svg-png-gif-file-formats--no-records-list-record-emply-data-user-interface-pack-design-development-illustrations-6430781.png?f=webp";

export const Cart = () => {
  const cart = useStore((state) => state.cart);
  const emptyCart = useStore((state) => state.emptyCart);

  return (
    <Stack mih="calc(100vh - 76.7px)">
      {!cart?.length ? (
        <Box m="auto" maw="70%">
          <Image fit="cover" src={imgUrl} alt="no product" />
          <Text size="25px" fw="700" ta="center">
            Savatda xozircha mahsulot yo&apos;q
          </Text>
          <Text c="gray" size="15px" fw="500" ta="center" mt="10px" lh="150%">
            Bosh sahifadagi mahsulotlardan boshlang yoki kerakli mahsulotni
            qidiruv orqali toping
          </Text>
        </Box>
      ) : (
        <Stack bg="white" p="20px" style={{ borderRadius: "8px" }} mb="20px">
          <Flex align="center" justify="space-between">
            <Text fw="700" size="22px">
              Savat
            </Text>
            <Center p="10px 0 10px 10px" onClick={() => emptyCart()}>
              <HiOutlineTrash color="green" size="23px" />
            </Center>
          </Flex>

          <Stack>
            {cart?.map((pro, i, arr) => {
              return (
                <CartItem
                  key={pro.title}
                  item={pro}
                  isLast={i === arr.length - 1}
                />
              );
            })}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

const CartItem = ({ item, isLast }) => {

  const store = useStore((state)=> state)

  return (
    <Flex h="80px" style={{ borderBottom: !isLast && "1px solid #ccc" }}>
      <Box h="70px" miw="55px" w="55px" pos="relative" bg="#f5f5f5">
        <Image
          fit="contain"
          src={item.image}
          style={{ aspectRatio: 1 }}
          alt={item.title}
        />
        <Center
          style={{
            borderRadius: "50%",
            color: "white",
            background: "#333333",
            fontSize: "8px",
            width: "23px",
            height: "23px",
            position: "absolute",
            right: "-5px",
            top: "-5px",
            display: !item.count && 'none'
          }}
        >
          <Text>{item.count}</Text>
        </Center>
      </Box>
      <Stack
        ml="15px"
        gap="0"
        h="auto"
        style={{ flexGrow: "1", flexShrink: "1", overflow: "hidden" }}
      >
        <Text
          size="13px"
          fw="500"
          mb="10px"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.title}
        </Text>
        {item.color && <Text>{item.color}</Text>}
        <Text size="14px" fw="700">
          {(item.price * item.count).toFixed(2)} s&apos;om
        </Text>
      </Stack>
      <Flex bg="gray.2" style={{ alignSelf: "center", borderRadius: "8px" }}>
        <Center w="35px" h="40px" style={{ cursor: "pointer" }} onClick={()=> store.removeFromCart(item)}>
          <TbMinus color="green" size="20px" />
        </Center>
        <Text size="16px" w="35px" h="35px" lh="240%" ta="center">
          {item.count || 1}
        </Text>
        <Center w="35px" h="40px" style={{ cursor: "pointer" }} onClick={()=> store.addToCart(item)}>
          <GoPlus color="green" size="20px" />
        </Center>
      </Flex>
    </Flex>
  );
};

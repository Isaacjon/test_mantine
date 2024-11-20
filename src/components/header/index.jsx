import { Center, Flex, Stack, Text } from "@mantine/core"
import { IoSearchOutline } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";

export const Header = () => {
  return (
    <Stack bg="white" p="15px 20px">
      <Flex align="center" justify="space-between">
        <Text c="rgb(3, 3, 120)" size="22px" fw="700" display="flex">
          Magic
          <Text component="span" c="rgb(65, 105, 225)" fw="700">bot</Text>
        </Text>

        <Center bg="#f5f5f5" p="5px" w="42px" h="42px" style={{borderRadius: "10px"}}>
          <LiaFlagUsaSolid size="30px"/>
        </Center>
      </Flex>
      <Flex bg="#f5f5f5" align="center" gap="15px" p="10px" style={{borderRadius: "10px", cursor: 'text'}}>
        <IoSearchOutline size="25px" color="grey" />
        <Text size="18px" c="grey">Mahsulotlarni qidirish</Text>
      </Flex>
    </Stack>
  )
}

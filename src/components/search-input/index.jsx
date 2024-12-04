import { Flex, Text } from "@mantine/core"
import { IoSearchOutline } from "react-icons/io5"

export const SearchInp = () => {
  return (
    <Flex h="100%" w="100%" bg="#e3e1d8" align="center" gap="15px" p="10px" style={{borderRadius: "4px", cursor: 'text'}}>
      <IoSearchOutline size="20px" color="black" />
      <Text size="16px" c="black" bg="transparent">Поиск</Text>
    </Flex>
  )
}
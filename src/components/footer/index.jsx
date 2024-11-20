import { Box, Divider, Flex, Group, Stack, Text } from "@mantine/core"
import { BsTelegram, BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";



export const Footer = () => {
  return (
    <Stack mt="15px" style={{borderRadius: '10px'}} bg="white" p="10px 20px">
      <Stack gap="0">
        <Text c="grey" fw="500">Biz Ijtimoiy tarmoqlarda</Text>
        <Group gap="10px">
          <BsTelegram size="20px"/>
          <BsInstagram size="20px"/>
          <BsYoutube size="25px"/>
        </Group>
      </Stack>

      <Stack gap="0">
        <Text c="grey" fw="500">Aloqa uchun</Text>
        <Text c="black" fw="700">+998999266946</Text>
      </Stack>

      <Divider />

      <Box ta="center">
        <Text c="#333" fw="500">Xizmat ko&apos;rstuvchi: UDEVS OOO.</Text>
        <Text c="#333" fw="500">STIR: 92669490</Text>
      </Box>

    </Stack>

  )
}

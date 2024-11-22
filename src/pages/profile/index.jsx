import { RiShoppingCartLine, RiUser3Line } from "react-icons/ri"
import { SectionBtn } from "./components/section-btn"
import { Box, Button, Center, Flex, Group, Stack, Text } from "@mantine/core"
import { LiaFlagUsaSolid, LiaShoppingBagSolid } from "react-icons/lia"
import { HiLocationMarker } from "react-icons/hi"
import { FaArrowRight } from "react-icons/fa6"
import { MdArrowForwardIos } from "react-icons/md"


export const Profile = () => {
  return (
    <Box mih="calc(100vh - 77px)">
      <Group gap="10px" pos="relative" p="10px">
        <Flex w="100%" gap="10px">
          <SectionBtn title="Buyurtmalarim" w="50%" icon={<RiShoppingCartLine color="white" />}/>
          <SectionBtn title="Oldindan buyurtmalar" w="50%" icon={<LiaShoppingBagSolid color="white" />}/>
        </Flex>

        <Flex w="100%" gap="10px">
          <SectionBtn title="Profilim" w="50%" icon={<RiUser3Line color="white" />}/>
          <SectionBtn title="Manzillarim" w="50%" icon={<HiLocationMarker color="white" />}/>
        </Flex>
        
        <Flex w="100%" gap="10px">
          <Stack gap="10px" w="50%">
            <SectionBtn title="Ballar"/>
            <SectionBtn title="Promo-kodlarim" icon={<HiLocationMarker color="white" />}/>
          </Stack>

          <Button bg="#1c7ed6" styles={{
            root: { height: 'auto', width: "50%", borderRadius: '25px' },
            // inner: { width: "100%" },
            label: {
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: "100%",
              padding: '20px 0'
              // height: 'auto'
            }
          }}>
            <Text  ta="left" fw="600" >Soqidlik Dasturi</Text>
            <Center mt="auto" style={{borderRadius: '50%', width: '50px', height: '50px' }} bg="white">
              <FaArrowRight color="#1c7ed6" size="24px"/>
            </Center>
          </Button>
        </Flex>

        <Flex w="100%" style={{
          padding: '15px',
          background: 'white',
          borderRadius: '15px',
          boxShadow: `0 0 5px -15px rgba(0,0,0,0.2)`,
        }}
        justify="space-between"
        >
          <Flex align="center" gap="10px">
            <LiaFlagUsaSolid size="25px "/>
            <Text>Til</Text>
          </Flex>
          <Flex  align="center" gap="10px">
            <Text c="gray" fw="600">O&apos;zbekcha</Text>
            <MdArrowForwardIos color="gray"/>
          </Flex>
        </Flex>


        <div style={{
            zIndex: '-1',
            position: "absolute",
            top: "30%",
            left: "30%",
            transform: "translate(-50%, 0%)",
            width: "50px",
            height: "50px",
            borderRadius: "50% 22% 40% 80%",  
            filter: "blur(100px)",
            background: "radial-gradient(circle at 100% 100%,red, red)",
            opacity: "0",
        }}></div>
        <div style={{
            zIndex: '-1',
            position: "absolute",
            top: "20%",
            left: "20%",
            transform: "translate(-50%, 0%)",
            width: "50px",
            height: "50px",
            borderRadius: "50% 22% 40% 80%",  
            filter: "blur(100px)",
            background: "radial-gradient(circle at 100% 100%,blue, blue)",
            opacity: "0",
        }}></div>
      </Group>
    </Box>
  )
}

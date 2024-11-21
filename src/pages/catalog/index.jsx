import { Box, Center, Flex, Group, Image, Stack, Text } from "@mantine/core";
import { IoSearchOutline } from "react-icons/io5";
import { categories, products } from "../../../data";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";

export const Catalog = () => {

  return (
    <>
      <Stack bg="green.9" p="15px 20px">
        <Flex align="center" justify="space-between">
          <Text c="white" size="22px" fw="700" display="flex">
            Katalog
          </Text>
        </Flex>
        <Flex
          bg="#f5f5f5"
          align="center"
          gap="15px"
          p="10px"
          style={{ borderRadius: "10px", cursor: "text" }}
        >
          <IoSearchOutline size="25px" color="grey" />
          <Text size="18px" c="grey">
            Mahsulotlarni qidirish
          </Text>
        </Flex>
      </Stack>
      
      <Group
        align="normal"
        justify="space-between"
        bg="white"
        p="35px 25px"
        gap="15px 5px"
      >
        {categories.map((category, index) => (
          <Stack key={index} w="30%" gap={1} miw="80px">
            <Box style={{ borderRadius: "10px" }} bg="#f5f5f5">
              <Image
                src={category.image}
                style={{ aspectRatio: 1 }}
                radius="50%"
                alt={category.title}
              />
            </Box>
            <Text size="sm" weight={500} ta="center">
              {category.title}
            </Text>
          </Stack>
        ))}
      </Group>

        {/* products */}
        
        <Stack p="0 25px 35px 25px" gap="10px" bg="white">
          <Text size="lg" weight={500} ta="left" fw="700">
            Barcha Mahsulotlar
          </Text>

          <Flex gap="10px">
            <Group bd="1px solid #ccc" style={{borderRadius: '20px'}} px="10px" gap="5px"  maw="max-content">
              <Text>Saralash</Text>
              <MdOutlineKeyboardArrowDown size="22px"/>
            </Group>
            <Group bd="1px solid #ccc" style={{borderRadius: '20px'}} px="10px" gap="5px"  maw="max-content">
              <Text>Narx</Text>
            </Group>
          </Flex>

          <Group align="normal">
            {[...products, ...products, ...products, ...products].map((category, index) => (
              <Stack key={index} w="47%" gap={1} justify="space-between">
                <Box bg="#f5f5f5" style={{borderRadius: "10px", overflow: 'hidden'}} pos="relative">
                  <Image fit="cover" src={category.image} style={{aspectRatio: 8/10}} alt={category.title} />
                {!!category.isNew &&  (
                  <Center bg="green" style={{borderRadius: '5px'}} w="max-content"  p="2px 7px" pos="absolute" bottom={5} left={2} >
                    <Text ml="5px" fw="700" size="10px" c="white">Yangi</Text>
                  </Center>
                )}
                {!!category.discount &&  (
                  <Center bg="red" style={{borderRadius: '5px'}} w="max-content"  p="2px 7px" pos="absolute" bottom={5} left={2} >
                    <FaFire color="white" size="12px" />
                    <Text ml="5px" fw="700" size="10px" c="white">Chegirma</Text>
                  </Center>
                )}
                </Box>
                <Flex mt="5" justify="space-between">
                  {!category.discount && <Text weight={500} ta="left" size="16px" fw="700">
                    {`${category.price}`} so&apos;m
                  </Text>}

                  {category.discount && (
                    <Stack gap={0}>
                      <Text weight={500} ta="left" size="16px" fw="700" c="red">
                        {`${category.price - category.discount}`} so&apos;m
                      </Text>
                      <Text  mt="3px" weight={500} ta="left" size="12px" fw="700" c="grey" style={{textDecoration: "line-through"}}>
                        {`${category.price}`} so&apos;m
                      </Text>
                    </Stack>
                  )}

                {!!category.discount && (
                  <Text size="12px" fw={600} bg="red" c="white" p="0 5px" style={{borderRadius: '5px', lineHeight: '15px', height: '15px'}}>
                    -{category.discount}%
                  </Text>
                )}
                </Flex>
                <Flex align="flex-end" gap="10px">
                  <Box>
                    <Text size="14px" fw="500" mt="8px" c="#000">
                    {category.title}
                    </Text>
                    <Text size="14px" mt="5px" className="two-line-text">
                      {category.description}
                    </Text>
                  </Box>
                  <Center style={{borderRadius: '50%', height: '27px', minWidth: '27px', p: "5px"}} bd="1px solid #ccc" onClick={()=> {}}>
                    <LiaShoppingBagSolid size="18px"/>
                  </Center>
                </Flex>
              </Stack>
            ))}
          </Group>
        </Stack>
        {/* products */}
    </>
  );
};

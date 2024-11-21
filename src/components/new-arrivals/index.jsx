import { Text, Group, Button, Image, Stack, Box, Center, Flex } from "@mantine/core";
import { FaFire } from "react-icons/fa";
import { MdArrowForwardIos } from 'react-icons/md'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { products } from "../../../data";
import useStore from "../../store";

export const NewArrivals = () => {
  
  const store = useStore((state)=> state)

  return (
    <Stack mt="15px" style={{borderRadius: '10px'}} bg="white" p="10px 20px">
      <Group justify="space-between" align="center">
        <Text size="xl" fw={700}>
          Yangi kelganlar
        </Text>
        <Button size="xs" color="#333" variant="light">
          <Text mr="5px" fw="500" size="14px">Barchasi</Text> 
          <MdArrowForwardIos  />
        </Button>
      </Group>
      <Group align="normal">
        {[...products, ...products, ...products, ...products].map((category, index) => (
          <Stack key={index} w="47%" gap={1} justify="space-between">
            <Box bg="#f5f5f5" style={{borderRadius: "10px", overflow: 'hidden'}} pos="relative">
              <Image fit="cover" src={category.image} style={{aspectRatio: 10/14}} alt={category.title} />
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
              <Center style={{borderRadius: '50%', height: '27px', minWidth: '27px', p: "5px"}} bd="1px solid #ccc"
              onClick={() => store.setDrawer(category)}
              >
                <LiaShoppingBagSolid size="18px"/>
              </Center>
             </Flex>
          </Stack>
        ))}
      </Group>
    </Stack>
  );
}

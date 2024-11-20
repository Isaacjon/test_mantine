import { Text, Group, Button, Image, Stack, Box, Center, Flex } from "@mantine/core";
import { FaFire } from "react-icons/fa";
import { MdArrowForwardIos } from 'react-icons/md'
import { LiaShoppingBagSolid } from "react-icons/lia";
const images = [
  'https://reon.kz/upload/iblock/0fb/0fb818c241ea8e5371ab1acf3284bc64.png',
  'https://icon2.cleanpng.com/lnd/20240417/kg/transparent-camera-lens-black-iphone-11-pro-max-camera-extended661fa5684e92c0.77071282.webp',
  'https://www.citypng.com/public/uploads/preview/airpods-pro-2nd-generation-png-7040816946218451no0esezhy.png',
  'https://toppng.com/uploads/preview/apple-iphone-15-pro-max-natural-titanium-png-11695041051y3hjkvpdvc.png',
  'https://casegear.in/cdn/shop/files/2_b76caedc-8a26-4302-9bfb-43710ef2ed1d.png?v=1722138631&width=2000',
];

export const NewArrivals = () => {
  const categories = [
    {
        title: "Men's T-Shirt",
        image: images[0],
        description: "Comfortable cotton t-shirt, perfect for everyday wear.",
        price: 29.99,
        discount: 10,
        isNew: false,
    },
    {
        title: "Sneakers",
        image: images[1],
        description: "Stylish sneakers, ideal for casual outings and workouts.",
        price: 89.99,
        // discount: 20,
        isNew: true,
    },
    {
        title: "Smart TV",
        image: images[2],
        description: "4K Ultra HD Smart TV with HDR and voice control.",
        price: 599.99,
        // discount: 15,
        isNew: false,
    },
    {
        title: "Skincare Set",
        image: images[3],
        description: "Natural skincare set for daily hydration and rejuvenation.",
        price: 49.99,
        discount: 5,
        isNew: false,
    },
];

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
        {[...categories, ...categories, ...categories, ...categories].map((category, index) => (
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
              <Center style={{borderRadius: '50%', height: '27px', minWidth: '27px', p: "5px"}} bd="1px solid #ccc">
                <LiaShoppingBagSolid size="18px"/>
              </Center>
             </Flex>
          </Stack>
        ))}
      </Group>
    </Stack>
  );
}

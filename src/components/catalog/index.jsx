import { Text, Group, Button, Image, Stack, Box } from "@mantine/core";
import {MdArrowForwardIos} from 'react-icons/md'

const images = [
  'https://png.pngtree.com/png-clipart/20201223/ourmid/pngtree-clothing-sweater-clothes-clothing-mens-clothing-spring-clothes-foreign-trade-tailor-png-image_2611494.jpg',
  'https://img.freepik.com/free-psd/running-shoes-sneakers-transparent-background_84443-1650.jpg?semt=ais_hybrid',
  'https://w7.pngwing.com/pngs/721/332/png-transparent-curved-screen-tv-refrigerator-water-dispenser-and-clothes-washer-home-appliance-icon-refrigerators-air-conditioners-washing-machines-household-appliances-electronics-household-gadget.png',
  'https://w7.pngwing.com/pngs/750/206/png-transparent-personal-care-lotion-hygiene-cosmetics-feminine-sanitary-supplies-soap-miscellaneous-food-cleaning-thumbnail.png',
  'https://e7.pngegg.com/pngimages/74/72/png-clipart-grocery-store-kabul-farms-supermarket-food-online-grocer-grocery-food-food-supermarket.png',
  'https://e7.pngegg.com/pngimages/460/226/png-clipart-incandescent-light-bulb-creativity-business-information-creative-thinking-light-bulb-text-lights-thumbnail.png',
  'https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-isometric-electronic-devices-collection-png-image_324124.jpg'
];

export const Catalog = () => {
  const categories = [
    {
      title: "Kiyim",
      image: images[0],
      description: "Clothing", // Optional description
    },
    {
      title: "Oyoq kiyimlar",
      image: images[1],
      description: "Footwear",
    },
    {
      title: "Uy uchun",
      image: images[2],
      description: "Home",
    },
    {
      title: "Gigiena va parvarish",
      image:
        images[3],
      description: "Hygiene & Care",
    },
    {
      title: "Oziq ovqat",
      image:
        images[4],
      description: "Food and groceries",
    },
    {
      title: "Ijodkorlik",
      image:
        images[5],
      description: "Creativity",
    },
    {
      title: "Elektronika",
      image:
        images[6],
      description: "Electronics",
    },
  ];

  return (
    <Stack mt="15px" style={{borderRadius: '10px'}} bg="white" p="10px 20px">
      <Group justify="space-between" align="center">
        <Text size="xl" fw={700}>
          Katalog
        </Text>
        <Button size="xs" color="#333" variant="light">
          <Text mr="5px" fw="500" size="14px">Barcha kategoriyalar</Text> 
          <MdArrowForwardIos  />
        </Button>
      </Group>
      <Group align="start" wrap="nowrap" style={{overflow: 'scroll'}}>
        {categories.map((category, index) => (
          <Stack key={index} w="80px" gap={1} miw="80px">
            <Image src={category.image} style={{aspectRatio: 1}} radius="50%" alt={category.title} />
            <Text size="sm" weight={500} ta="center">
              {category.title}
            </Text>
          </Stack>
        ))}
      </Group>
    </Stack>
  );
};

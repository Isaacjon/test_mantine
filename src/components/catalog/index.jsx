import { Text, Group, Button, Image, Stack, Box } from "@mantine/core";
import {MdArrowForwardIos} from 'react-icons/md'

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
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
      <Group align="start">
        {categories.map((category, index) => (
          <Stack key={index} w="20%" gap={1}>
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

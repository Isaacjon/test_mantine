import { Text, Group, Button, Image, Stack, Box } from "@mantine/core";
import {MdArrowForwardIos} from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { categories } from "../../../data";


export const Catalog = () => {
  const navigate = useNavigate();

  const goToCatalogs = () => navigate("catalog")

  return (
    <Stack mt="15px" style={{borderRadius: '10px'}} bg="white" p="10px 20px">
      <Group justify="space-between" align="center">
        <Text size="xl" fw={700}>
          Katalog
        </Text>
        <Button size="xs" color="#333" variant="light" onClick={goToCatalogs}>
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

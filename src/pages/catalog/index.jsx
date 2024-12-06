import { Button, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Catalog = () => {
  const navigate = useNavigate()
  
  const goHome = () => navigate('/')

  return (
    <Stack spacing="xl" px="lg" py="md">
      <Button
        c="#919395"
        variant="transparent"
        w="100%"
        p="0"
        mb="30px"
        styles={{
          label: { width: "100%" },
          inner: { width: "100%" },
        }}
        onClick={goHome}
      >
        <MdArrowBackIos size="20px" />
        <Text mr="auto" fz="14px" fw="500" ml="5px">
          Главная
        </Text>
        {/* <Box ml="auto" w="4px" h="70%" bg="#919395" /> */}
      </Button>
      <Title order={2}>Каталог</Title>
      {catalogData.map((category, index) => (
        <Flex key={index} align="flex-start" gap="20px" mt="20px">
          <Group>
            <Image
              src={category.image}
              alt={category.title}
              width={54}
              height={54}
              radius="md"
            />
          </Group>
          <Stack spacing={0}>
            <Text fw={600} size="xl">
              {category.title}
            </Text>
            {category.items.map((item, idx) => (
              <Text key={idx}>{item}</Text>
            ))}
          </Stack>
        </Flex>
      ))}
    </Stack>
  );
};


const catalogData = [
  {
    title: 'Новый год',
    image: 'https://cdn.lemanapro.ru/lmru/image/upload/b_transparent/c_pad/f_auto/q_auto/dpr_1.0/w_80/h_80/v1721831290/fudzi/fudzi/7gZWm-BCVXzT_58zQg0wu/vse-dlya-novogo-goda.png/vse-dlya-novogo-goda.png', // Replace with actual image URL
    items: [
      'Ёлки новогодние',
      'Новогоднее освещение',
      'Новогодний декор',
      'Товары для новогоднего праздника',
      'Украшение ёлки по стилям и цветам',
    ],
  },
  {
    title: 'Текстиль',
    image: 'https://cdn.lemanapro.ru/lmru/image/upload/b_transparent/c_pad/f_auto/q_auto/dpr_1.0/w_80/h_80/v1730791691/fudzi/fudzi/K_cYkcVYBei9rpsbrqiys/tekstil1.png/tekstil1.png', // Replace with actual image URL
    items: [
      'Шторы',
      'Домашний текстиль',
      'Постельное бельё',
      'Ткани',
      'Ковры и коврики для интерьера',
    ],
  },
  {
    title: 'Декор',
    image: 'https://cdn.lemanapro.ru/lmru/image/upload/b_transparent/c_pad/f_auto/q_auto/dpr_1.0/w_80/h_80/v1714903491/fudzi/fudzi/09KV1n4bxXFrORwwvYzOz/89361464.png/89361464.png', // Replace with actual image URL
    items: [
      'Обои',
      'Декор для стен',
      'Декор потолка и лепнина',
      'Карнизы для штор',
      'Капсульные коллекции',
      'Декоративная мебель',
    ],
  },
];
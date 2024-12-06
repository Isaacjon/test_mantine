import { Carousel } from "@mantine/carousel";
import {
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { products, products2 } from "../home/Home";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import {
  OnSale,
  ProductButtons,
  StarRating,
} from "../../components/product-card";
import { LogoFrameIcon } from "../../assets/icons";
import { CiLock } from "react-icons/ci";
import { RiBox1Line } from "react-icons/ri";
import { LiaTruckSolid } from "react-icons/lia";
import { RenderProductsSection } from "../../components/render-products-section";
import { useEffect } from "react";
import useStore from "../../store";

const allproducts = products.concat(products2);

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const store = useStore((state) => state);

  const handleBack = () => navigate(-1);

  const bookmark = (product) => () => store.bookmarkProduct(product) 

  const product = allproducts.find((item) => item.id == id) || {};
  product.imageList[0] = product.image

  const isBookmarked = store.bookmarks.some(item => item.id === product.id)
  const BookmarkIcon = isBookmarked ? IoBookmark : IoBookmarkOutline 

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [id]);

  return (
    <>
      {/* product details */}
      <Box bg="white" p="16px">
        {/* category name */}
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
          onClick={handleBack}
        >
          <MdArrowBackIos size="20px" />
          <Text mr="auto" fz="14px" fw="500" ml="5px">
            {product.categoryType}
          </Text>
          {/* <Box ml="auto" w="4px" h="70%" bg="#919395" /> */}
        </Button>
        {/* category name */}

        {/* images */}
        <MyCarousel imgs={product.imageList} />
        {/* images */}

        {/* name */}
        <Flex mt="20px">
          <Title order={5}>{product.name}</Title>
          <BookmarkIcon style={{cursor: 'pointer'}} color={isBookmarked ? 'gold' : ''} size="25px" onClick={bookmark(product)}/>
          
        </Flex>
        {/* name */}

        {/* rating */}
        <StarRating rating={product.rating} count={product.ratingCount} />
        {/* rating */}

        {/* price */}
        {product.onSale && (
          <Box w="130px">
            <OnSale maw="130px" lh="20px" />
          </Box>
        )}

        <Flex align="baseline" gap="20px">
          <Text
            c={product.onSale ? "#b82825" : "#333"}
            fw={700}
            size="xl"
            m="5px 0 10px"
          >
            {product.currentPrice.toLocaleString()} ₸/шт.
          </Text>
          {product.originalPrice && (
            <Text c="black" td="line-through" size="14px" mt="10px">
              {product.originalPrice.toLocaleString()} ₸
            </Text>
          )}
        </Flex>
        {/* price */}

        {/* add to cart */}
        <ProductButtons product={product} />
        {/* add to cart */}

        {/* in stock */}
        <>
          <Flex mt="30px" justify="space-between" style={{ cursor: "pointer" }}>
            <Stack gap="5px">
              <Text fz="14px" fw="600">
                В наличии в 1 магазине
              </Text>
              <Text fz="12px">Отдел «Декор»</Text>
            </Stack>
            <Button radius="50%" bg="dark" p="0" pl="2px" w="20px" h="20px">
              <MdArrowForwardIos size="10px" />
            </Button>
          </Flex>

          <Divider my="20px" />

          <Text c="#357931" fz="14px" fw="500">
            Доступно для заказа 2 шт.
          </Text>
          <Text fz="12px" mt="5px">
            Казахстан
          </Text>
        </>
        {/* in stock */}

        {/* receive method */}
        <>
          <Flex align="center" mt="20px">
            <LogoFrameIcon />
            <Text ml="15px" fz="14px">
              Самовывоз сегодня
            </Text>
            <Text ml="auto" fz="14px">
              бесплатно
            </Text>
          </Flex>

          <Flex align="center" mt="10px" c="gray">
            <RiBox1Line size="20px" />
            <Text ml="15px" fz="14px">
              Доставка в пункт выдачи недоступна
            </Text>
            <CiLock size="20px" style={{ marginLeft: "auto" }} />
          </Flex>

          <Flex align="center" mt="10px">
            <LiaTruckSolid size="20px" />
            <Text ml="15px" fz="14px">
              Доставим завтра
            </Text>
            <Text ml="auto" fz="14px">
              от 2 100 ₸
            </Text>
          </Flex>
        </>
        {/* receive method */}

        {/* description */}
        <Stack gap="5px" mt="25px">
          <Title tt="uppercase" order={3}>
            Описание
          </Title>
          <Text fz="14px">
            <Text fz="14px" fw="600" component="span">
              Плед «Пирамида» станет
            </Text>{" "}
            отличным подарком или практичным приобретением для дома. Покрывало с
            мелким ворсом из микрофибры приятно на ощупь. Благодаря особому
            переплетению полиэстеровой нити материал обладает хорошей
            паропроницаемостью — под таким покрывалом будет тепло
          </Text>
        </Stack>
        {/* description */}

        {/* properties */}
        <Stack gap="5px" mt="25px">
          <Title tt="uppercase" order={3}>
            Характеристики
          </Title>

          <Table>
            <Table.Tbody>
              {Object.entries(properties).map(([key, value]) => (
                <Table.Tr
                  style={{ borderBottom: "1px dashed #e1e2e5" }}
                  key={key}
                >
                  <Table.Td w="50%" style={{ verticalAlign: "top" }} p="10px 0">
                    {key}
                  </Table.Td>
                  <Table.Td w="50%" style={{ verticalAlign: "top" }} p="10px 0">
                    {value}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>

          <Text c="gray.6" fz="12px" mt="10px">
            Цены и наличие товаров на сайте и в гипермаркетах могут различаться.
            Пожалуйста, уточняйте стоимость и наличие товаров в конкретном
            магазине. Информация о товарах на сайте обновляется и может быть
            неактуальна для таких же товаров, проданных ранее.
          </Text>
        </Stack>
        {/* properties */}
      </Box>
      {/* product details */}

      {/* similar products */}
      <Box pt="20px" bg="white">
        <RenderProductsSection title="Похожие товары" products={products2} />
      </Box>
      {/* similar products */}
    </>
  );
};

const MyCarousel = ({ imgs = [] }) => {
  return (
    <Flex h="auto" maw="100%">
      <Carousel
        // slideSize={"100%"}
        slideGap="12px"
        withIndicators={true}
        withControls={false}
        height="100%"
        loop={true}
        align="start"
        style={{ flex: 1 }}
        classNames={styles}
      >
        {imgs?.map((img, i) => (
          <Carousel.Slide key={i}>
            <img
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                width: "100%",
                aspectRatio: 1,
              }}
              src={img}
              alt="product-details images"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  );
};

const properties = {
  Цвет: "Коричневый, Серый, Белый",
  "Ширина (см)": "200",
  "Длина (см)": "220",
  Рисунок: "Геометрические фигуры",
  "Цветовая палитра": "Коричневый",
  Сушка: "Сушка в машине запрещена",
};

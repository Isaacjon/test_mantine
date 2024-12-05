import {
  Container,
  Grid,
  Card,
  Image,
  Text,
  Badge,
  Group,
  Button,
  Stack,
  Title,
  Paper,
  Box,
  Flex,
  Center,
} from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import useStore from "../../store";
import { useNavigate } from "react-router-dom";

export const StarRating = ({ rating, count }) => (
  <Group gap="0" h="40px">
    {[...Array(rating)].map((_, i) => (
      <Text size="12px" key={i} c="yellow" fw={700}>
        ★
      </Text>
    ))}
    <Text c="dimmed" size="sm">
      ({count})
    </Text>
  </Group>
);

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const openProduct = () => navigate(`/product/${product.id}`);

  return (
    <Card
      radius={0}
      p="16px"
      w="calc(50% - 1px)"
      onClick={openProduct}
      style={{ cursor: "pointer" }}
    >
      <Paper pos="relative">
        <Image
          src={product.image}
          height={"auto"}
          width={"100%"}
          alt={product.name}
        />
      </Paper>

      <Stack mt="md" gap="0">
        <Text fw={500} size="14px" lineClamp={4}>
          {product.name}
        </Text>

        {product.rating && (
          <StarRating rating={product.rating} count={product.ratingCount} />
        )}
      </Stack>

      <Stack gap="0" mt="auto">
        {product.onSale && <OnSale />}
        {product.originalPrice && (
          <Text c="black" td="line-through" size="12px" mt="10px">
            {product.originalPrice.toLocaleString()} ₸
          </Text>
        )}
        <Text
          c={product.onSale ? "#b82825" : "#333"}
          fw={700}
          size="xl"
          m="5px 0 10px"
        >
          {product.currentPrice.toLocaleString()} ₸/шт.
        </Text>
        <ProductButtons product={product} />
      </Stack>
    </Card>
  );
};

export const ProductButtons = ({ product }) => {
  const store = useStore((state) => state);
  const cart = useStore((state) => state.cart);

  const addToCart = (event) => {
    event?.stopPropagation?.();
    store.addToCart(product);
  };

  const removeFromCart = (event) => {
    event?.stopPropagation?.();
    store.removeFromCart(product);
  };

  const count = cart?.find((item) => item.id === product.id)?.count;

  return (
    <>
      {!count && (
        <Button
          fullWidth
          color="dark"
          fw="700"
          size="md"
          radius="6px"
          fz="14px"
          px="10px"
          h="40px"
          onClick={addToCart}
        >
          В КОРЗИНУ
        </Button>
      )}

      {!!count && (
        <Button
          fullWidth
          color="dark"
          fw="700"
          size="md"
          radius="6px"
          fz="14px"
          px="0px"
          h="40px"
          variant="outline"
          display="flex"
          justify="between"
          styles={{
            inner: { width: "100%" },
            label: { width: "100%" },
          }}
        >
          <Center
            flex="1"
            w="35px"
            h="40px"
            style={{ cursor: "pointer" }}
            onClick={removeFromCart}
          >
            <TbMinus color="" size="20px" />
          </Center>
          <Text size="16px" w="max-content" lh="240%" ta="center">
            {count} кор.
          </Text>
          <Center
            flex="1"
            w="35px"
            h="40px"
            style={{ cursor: "pointer" }}
            onClick={addToCart}
          >
            <GoPlus color="" size="20px" />
          </Center>
        </Button>
      )}
    </>
  );
};

export const OnSale = ({...props}) => (
  <Flex h="20px" c="white" bg="#801916">
    <Center w="20px" bg="#b82825">
      <Text size="15px" fw="600">
        %
      </Text>
    </Center>
    <Text
      ml="6px"
      size="9px"
      fw="600"
      lts=".3px"
      maw="60px"
      lh="10px"
      tt="uppercase"
      {...props}
    >
      СНИЖЕНИЕ ЦЕНЫ!
    </Text>
  </Flex>
);

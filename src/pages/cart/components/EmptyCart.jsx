import { Box, Button, Text } from "@mantine/core";
import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const EmptyCart = () => {
  const navigate = useNavigate();
  const goToCatalogs = () => navigate("/catalog");

  return (
    <Box m="auto" maw="70%" ta="center">
      <RiErrorWarningLine color="#ccc6b8" size="50px" />
      <Text mt="15px" c="#919395" size="20px" fw="600" ta="center">
        В корзине пусто
      </Text>
      <Text c="#919395" fw="500" ta="center" mt="10px" lh="150%">
        Перейдите в каталог, чтобы добавить нужные товары
      </Text>
      <Button
        m="20px auto"
        color="#e3e1d8"
        c="#21282b"
        fw="700"
        size="md"
        radius="4px"
        h="48px"
        onClick={goToCatalogs}
      >
        Перейти в каталог
      </Button>
    </Box>
  );
};
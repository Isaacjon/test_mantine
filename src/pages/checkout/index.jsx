import {
  ActionIcon,
  Box,
  Button,
  Center,
  CheckIcon,
  Flex,
  Group,
  Image,
  Loader,
  Paper,
  Radio,
  Stack,
  Text,
  TextInput,
  rem,
} from "@mantine/core";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowBack } from "react-icons/io";
import useStore from "../../store";
import styles from "./styles.module.css";
import { useState } from "react";
import { CheckoutBtn } from "../cart/components/checkout-btn";
import { CiWarning } from "react-icons/ci";
import { IoWarningOutline } from "react-icons/io5";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate()

  const { cart, cartLength, emptyCart } = useStore((state) => state);

  const [paymentType, setPaymentType] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { sum, amount } =
    cart?.reduce(
      (prev, Curr) => {
        const price = Curr?.currentPrice || Curr?.originalPrice;
        console.log("test ", { price, count: Curr.count, sum: prev.sum });
        return {
          sum: (+prev.sum + price * Curr.count)?.toFixed(2),
          amount: prev.amount + Curr.count,
        };
      },
      { sum: 0, amount: 0 }
    ) || {};

  const handleBack = () => {
    console.log('navigate(-1) ', navigate(-1))
  }

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      const id = notifications.show({
        loading: true,
        title: "Ваш заказ выполняется",
        message: "пожалуйста, подождите",
        autoClose: false,
        withCloseButton: false,
        position: "top-right",
      });

      setTimeout(() => {
        notifications.update({
          id,
          color: "teal",
          title: "Ваш заказ принят. Спасибо за заказ!",
          message:
            "Вы можете получить свой заказ в наших почтовых отправлениях",
          icon: <CheckIcon style={{ width: rem(18), height: rem(18) }} />,
          loading: false,
          autoClose: 3000,
        });
      }, 2000);
    }, 1000);

    setTimeout(() => {
      emptyCart()
      navigate('/cart')
    }, 4000);
  };


  return (
    <>
      <Stack p="16px">
        <Flex gap="15px" align="center">
          <ActionIcon
            bg="#e3e1d8"
            size={40}
            variant="default"
            aria-label="ActionIcon with size as a number"
            onClick={handleBack}
          >
            <IoMdArrowBack size="20px" />
          </ActionIcon>
          <Text fz="28px" fw="600">
            Оформление заказа
          </Text>
        </Flex>

        <Address />
      </Stack>
      <Overall cartLength={cartLength} cart={cart} sum={sum}/>
      <Stack p="16px">
        <UserForm />
        <PaymentMethods
          value={paymentType}
          onChange={setPaymentType}
          data={data}
        />
      </Stack>

      <Box bg="white" p="16px">
        {paymentType == "2" && (
          <Flex
            mb="20px"
            bg="#fcf2be"
            p="16px"
            align="flex-start"
            style={{ borderRadius: "8px" }}
          >
            <IoWarningOutline size="35px" style={{ marginTop: "-7px" }} />
            <Text ml="10px" fz="14px" fw="500">
              После получения заявки мы свяжемся с вами для подтверждения заказа
            </Text>
          </Flex>
        )}
        <Text fz="22px" fw="700" mb="-30px">
          Ваш заказ
        </Text>
        <CheckoutBtn title="Оформить заявку" onClick={handleSubmit} />
      </Box>

      {isSubmitting && (
        <Center
          h="100dvh"
          w="100vw"
          pos="fixed"
          top="0"
          left="0"
          bg="rgba(0,0,0,0.5)"
        >
          <Loader color="gold" />
        </Center>
      )}
    </>
  );
};

const data = [
  {
    name: "Картой на сайте (Kaspi)",
    description: "Kaspi.kz",
    value: "1",
  },
  {
    name: "По заявке",
    description: "Свяжемся по телефону",
    value: "2",
  },
];

const Overall = ({cartLength, cart, sum}) => {
  return (
    <>
            <Box bd="1px solid #ccc" bg="white" p="32px 16px">
        <Text fz="14px" lh="20px">
          {cartLength} товара – 17,205 кг
        </Text>

        <Products cart={cart} />

        <Text fw="600" fz="">
          Итого {sum} ₸
        </Text>
        <Text fw="500" fz="14px" lh="20px">
          {cartLength} позиции на сумму {sum} ₸
        </Text>
      </Box>
    </>
  )
}

const Products = ({ cart }) => {
  return (
    <>
      <Flex gap="15px" my="20px 10px">
        {cart.map((item, i) => {
          return (
            <Box key={i}>
              <Image
                w="40px"
                h="40px"
                fit="cover"
                src={item?.image}
                style={{ aspectRatio: 10 / 14 }}
                alt={item?.name}
              />
              <Text ta="center" fz="14px" lh="20px">
                {item?.count} шт.
              </Text>
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

const Address = () => {
  return (
    <>
      <Paper radius="8px" shadow="xs" p="24px 12px" bd="1px solid #ccc">
        <Text fz="18px" fw="600">
          Способ получения
        </Text>

        <Text mt="20px" fz="14px" lh="120%">
          Выберите адрес доставки, пункт выдачи или магазин самовывоза
        </Text>
        <Button mt="15px" fullWidth color="#e3e1d8" c="black" h="40px">
          <HiLocationMarker size="20px" />
          <Text ml="10px">Выбрать на карте</Text>
        </Button>
      </Paper>
    </>
  );
};

const UserForm = () => {
  return (
    <>
      <Paper radius="8px" shadow="xs" p="24px 12px" bd="1px solid #ccc">
        <Text fz="18px" fw="600">
          Получатель
        </Text>

        <TextInput type="text" label="Фамилия" placeholder="Фамилия" />
        <TextInput type="text" label="Имя" placeholder="Имя" />
        <TextInput type="tel" label="Телефон" placeholder="Телефон" />
        <TextInput
          type="email"
          label="Электронная почта"
          placeholder="Электронная почта"
        />
      </Paper>
    </>
  );
};

const PaymentMethods = ({ value, onChange, data, }) => {
  return (
    <>
      <Paper radius="8px" shadow="xs" p="24px 12px" bd="1px solid #ccc">
        <Text fz="18px" fw="600">
          Способ оплаты
        </Text>
        <Radio.Group
          value={value}
          onChange={onChange}
          label="Pick one package to install"
          description="Choose a package that you will need in your application"
        >
          <Stack pt="md" gap="10px">
            {data.map((item) => (
              <Radio.Card
                radius="md"
                value={item.value}
                key={item.name}
                bd={item.value === value ? "2px solid black" : undefined}
              >
                <Stack
                  gap="0px"
                  align="center"
                  justify="center"
                  wrap="nowrap"
                  p="16px"
                >
                  <Text fz="16px" className={{}}>
                    {item.name}
                  </Text>
                  <Text fz="14px" className={{}}>
                    {item.description}
                  </Text>
                </Stack>
              </Radio.Card>
            ))}
          </Stack>
        </Radio.Group>
      </Paper>
    </>
  );
};

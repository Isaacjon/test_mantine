import { Button, Center, Stack, TextInput, Title } from '@mantine/core'

export const Auth = () => {

  return (
    <Center p="24px 16px 32px" h="calc(100dvh - 156px)">
      <Stack w="100%" >
        <Title ta="center" order={3} mb="20px">Вход или регистрация</Title>
        <TextInput type="tel" label="Номер телефона" placeholder="+998 XX XXX XX XX" />
        <Button mt="15px" fullWidth color="#FDC300" fw="600" fz="16px" c="black" h="48px">
          Получить код
        </Button>

        <Button mt="15px" variant='transparent' fullWidth color="#FDC300" fw="600" fz="16px" c="black" h="48px">
          Войти по почте
        </Button>
      </Stack>
    </Center>
  )
}

import { Button, Center, Stack, Text, TextInput, Title } from '@mantine/core'
import { useState } from 'react'

export const Auth = () => {
const [type, setType] = useState('phone')

const changeType = () => {
  setType(type === 'phone' ? 'email' : 'phone')
}

const isPhoneType = type === 'phone'

  return (
    <Center p="24px 16px 32px" h="calc(100dvh - 156px)">
      <Stack w="100%" >
        <Title ta="center" order={3} mb="20px">{isPhoneType ?'Вход или регистрация' : 'Вход по почте'}</Title>
        {!isPhoneType && <Text fz="14px" ta="center" mt="-20px">Для зарегистрированных покупателей</Text>}
        {isPhoneType && <TextInput type="tel" label="Номер телефона" placeholder="+998 XX XXX XX XX" />}
        {!isPhoneType && <TextInput type="email" placeholder="Адрес почты" />}
        <Button mt="15px" fullWidth color="#FDC300" fw="600" fz="16px" c="black" h="48px">
          Получить код
        </Button>

        <Button onClick={changeType} mt="15px" variant='transparent' fullWidth color="#FDC300" fw="600" fz="16px" c="black" h="48px">
          {isPhoneType ? 'Войти по почте' : 'Войти по номеру телефона'}
        </Button>
      </Stack>
    </Center>
  )
}

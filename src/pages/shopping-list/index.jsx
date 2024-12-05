import { Button, Center, Stack, Text, Title } from "@mantine/core"
import { RiUser3Line } from "react-icons/ri"
import { DrillLogo } from "../../assets/icons"
import { Footer } from "../../components/footer"
import { useNavigate } from "react-router-dom"

export const ShoppingList = () => {
  const navigate =  useNavigate()

  const goAuth = () => navigate('/auth')
  return (
    <>
    {/* <Center p="24px 16px 32px" h="calc(100dvh - 156px)">
     
     
    </Center> */}
    <Stack w="100%" mb="20px" p="16px">
      <DrillLogo style={{margin: '0 auto', width: '120px'}}/>
      <Title order={2} mb="20px">В списке покупок ничего нет</Title>
      <Text>Войдите в профиль, если вы уже добавляли товары под своим именем</Text>
      <Button onClick={goAuth} mt="15px" fullWidth color="#21282b" fw="600" fz="16px" c="white" h="48px">
        <RiUser3Line size="20px" />
        <Text ml="10px">Войти</Text>
      </Button>
    </Stack>
    <Footer />

  </>
  )
}

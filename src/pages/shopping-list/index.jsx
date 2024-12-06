import { Button, Center, Divider, Flex, Stack, Text, Title } from "@mantine/core"
import { RiUser3Line } from "react-icons/ri"
import { Footer } from "../../components/footer"
import { useNavigate } from "react-router-dom"
import { NoProducts } from './components/NoProducts'
import { HiDotsCircleHorizontal } from "react-icons/hi"
import { ProductsSection } from "./components/ProductsSection"
import useStore from "../../store"

export const ShoppingList = () => {
  const navigate =  useNavigate()
  
  const bookmarks = useStore((state) => state.bookmarks);


  const goAuth = () => navigate('/auth')
  return (
    <>
      {/* <Center p="24px 16px 32px" h="calc(100dvh - 156px)">
     
     
    </Center> */}
      <Stack w="100%" mb="20px" p="16px">
        {!bookmarks?.length && <NoProducts />}
        <Text>
          Войдите в профиль, если вы уже добавляли товары под своим именем
        </Text>
        <Button
          onClick={goAuth}
          mt="15px"
          fullWidth
          color="#21282b"
          fw="600"
          fz="16px"
          c="white"
          h="48px"
        >
          <RiUser3Line size="20px" />
          <Text ml="10px">Войти</Text>
        </Button>

        {!!bookmarks?.length && (
          <>
            <Flex align="center" justify="space-between">
              <Title order={2}>Список покупок</Title>
              <HiDotsCircleHorizontal size="30px" />
            </Flex>
            <Divider my="10px" />
            <ProductsSection />
          </>
        )}

      </Stack>

      <Footer />
    </>
  );
}


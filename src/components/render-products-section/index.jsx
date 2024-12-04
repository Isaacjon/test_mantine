import { Box, Flex, Group, Text, Title } from "@mantine/core"
import { FaArrowRight } from "react-icons/fa"
import { ProductCard } from "../product-card"

export const RenderProductsSection = ({ title, products }) => {

  return (
    <Box bg="white">
      <Title px="16px" order={1} mb="10px" size="22px" fw="500">
        {title}
      </Title>

      <Group bg="#e3e1d8" gap="1px" align="stretch">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}  />
        ))}
      </Group>
      <Flex
        style={{ borderTop: "1px solid #e3e1d8" }}
        align="center"
        justify="space-between"
        p="12px 10px"
      >
        <Text>Смотреть всё</Text>
        <FaArrowRight />
      </Flex>
    </Box>
  )
}

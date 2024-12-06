import { Stack } from "@mantine/core";
import useStore from "../../../store";
import { CartItem } from "../../cart/components/CartItem";

export const ProductsSection = () => {
  const bookmarks = useStore((state) => state.bookmarks);

  const handleSelect = (product) => () => () => {
      console.log('product ', product)
  }

  return (
    <Stack>
      {bookmarks?.map((pro, i, arr) => {
        return (
          <CartItem
            key={pro.name}
            item={pro}
            onClick={handleSelect(pro)}
            noSelection={true}
          />
        );
      })}
    </Stack>
  );
};

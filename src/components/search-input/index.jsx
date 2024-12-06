import { TextInput } from "@mantine/core"
import { IoSearchOutline } from "react-icons/io5"

export const SearchInp = () => {
  return (
    <TextInput
      styles={{
        wrapper: { height: "100%" },
        input: {
          height: "100%",
          background: "#e3e1d8",
          border: "none",
          color: "black",
          fontSize: "18px",
        },
      }}
      w="100%"
      h="100%"
      type="search"
      placeholder="Поиск"
      leftSection={<IoSearchOutline size="20px" color="black" />}
    />
  );
}
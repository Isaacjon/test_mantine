
import { DrillLogo } from "../../../assets/icons";
import { Title } from "@mantine/core";

export const NoProducts = () => {
  return (
    <>
      <DrillLogo style={{ margin: "0 auto", width: "120px" }} />
      <Title order={2} mb="20px">
        В списке покупок ничего нет
      </Title>
    </>
  );
};

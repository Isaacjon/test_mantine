import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container bg="#f5f5f5">
      <Container >
        <Outlet />
      </Container>
    </Container>
  );
};

export default Layout;

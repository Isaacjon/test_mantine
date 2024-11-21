import {
  Box,
  Button,
  Center,
  Drawer,
  Flex,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import useStore from "../store";
import { FaFire } from "react-icons/fa";

const Layout = () => {
  const store = useStore((state) => state);

  return (
    <>
      <Outlet />
      <Sidebar />
      <Drawer
        opened={!!store.drawer}
        onClose={() => store.setDrawer(null)}
        title="Savatga qo'shish"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        position="bottom"
        size="lg"
        styles={{
          content: {
            height: "auto",
          },
          title: {
            fontSize: "25px",
            fontWeight: 700,
          },
        }}
        // transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        <Stack gap="0">
          <Box
            bg="#f5f5f5"
            style={{ borderRadius: "10px", overflow: "hidden" }}
            p="20px"
          >
            <Image
              fit="cover"
              src={store.drawer?.image}
              style={{ aspectRatio: 10 / 14 }}
              alt={store.drawer?.title}
            />
          </Box>
          <Flex>
            {!!store.drawer?.isNew && (
              <Center
                bg="green"
                style={{ borderRadius: "5px" }}
                w="max-content"
                p="2px 7px"
                mt="10px"
              >
                <Text ml="5px" fw="700" size="14px" c="white">
                  Yangi
                </Text>
              </Center>
            )}
            {!!store.drawer?.discount && (
              <Center
                bg="red"
                style={{ borderRadius: "5px" }}
                w="max-content"
                p="5px 8px"
                mt="10px"
              >
                <FaFire color="white" size="12px" />
                <Text ml="5px" fw="700" size="14px" c="white">
                  Chegirma
                </Text>
              </Center>
            )}
          </Flex>
          <Text size="22px" fw="700" mt="8px" c="#000">
            {store.drawer?.title}
          </Text>
          <Text size="16px" fw="500" my="8px" c="#000">
            {store.drawer?.description}
          </Text>
          <Button
            bg="green.8"
            size="md"
            onClick={() => {
              store.addToCart(store.drawer);
              store.setDrawer(null);
            }}
          >
            Savatga qo&apos;shish
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};

export default Layout;

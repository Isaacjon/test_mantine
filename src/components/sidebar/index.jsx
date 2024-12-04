import { Box, Button, Drawer, Stack } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from './styles.module.css'

export const SideBarToggle = ({ ...props }) => {
  return (
    <Button color="#fdc300" w="76px" h="100%" {...props}>
      <RxHamburgerMenu size="20px" color="black" />
    </Button>
  );
};

export const Sidebar = ({ opened, open, close }) => {
  return (
    <Drawer.Root opened={opened} onClose={close} size="calc(100% - 48px)">
      <Drawer.Overlay opacity={5} blur={4} />
      <Drawer.Content
        styles={{
          content: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Drawer.Header p="16px">
          <Drawer.CloseButton m="0 auto 0 0" icon={<FaArrowLeft />} />
          <Drawer.Title>Қаз</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body mt="auto">
          {navBarData.map((d, i) => (
            <Stack
              key={i}
              className={styles.hover_links}
            >
              <Box fw="500" fz="18px" c="#000">
                {d.title}
              </Box>
              <Box fz="12px" c="#000">
                {d.subtitle}
              </Box>
            </Stack>
          ))}
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};

const navBarData = [
  {
    title: "Товары",
    subtitle: "Всё для стройки, ремонта и обустройства",
  },
  {
    title: "Проекты и услуги",
    subtitle: "Проектирование, установка, ремонт под ключ и др.",
  },
];

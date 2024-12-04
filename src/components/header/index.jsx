import { Flex} from "@mantine/core"
import { SearchInp } from "../search-input";
import { useDisclosure } from '@mantine/hooks';
import { SideBarToggle, Sidebar } from "../sidebar";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const {pathname} = useLocation()

  if(pathname === '/checkout') return null
  
  return (
  <>
    <Flex gap="12px" bg="white" px="16px" align="center" justify="space-between" h="48px">
      <SideBarToggle onClick={open}/>
      <SearchInp />
    </Flex>

    <Sidebar opened={opened} open={open} close={close} />
  </>
  )
}



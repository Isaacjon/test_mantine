
import { HiLocationMarker } from "react-icons/hi";
import { PiWarningCircle } from "react-icons/pi";

import style from './style.module.css'
import { Text } from "@mantine/core";

export const TopLocation = () => {
  
  return (
    <div className={style['top-location']}>
      <HiLocationMarker color="green" fontSize="30px"/>
        <Text>Manzilingizni kiriting</Text>
      <PiWarningCircle color="orange" fontSize="30px"/>
    </div>
  )
}

import { Center } from "@mantine/core";
import { Logo1, Logo2, Logo3 } from "../../assets/icons";
import { useEffect, useState } from "react";
import style from "./style.module.css";

export const TopLogo = () => {
  const [activeLogo, setActiveLogo] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveLogo((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Center className={style["logo-container"]}>
      <Logo1
        className={`${style["logo"]} ${activeLogo === 0 && style["active"]}`}
      />

      <Logo2
        className={`${style["logo"]} ${activeLogo === 1 && style["active"]}`}
      />

      <Logo3
        className={`${style["logo"]} ${activeLogo === 2 && style["active"]}`}
      />
    </Center>
  );
};

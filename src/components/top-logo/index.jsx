import { Center, Text } from "@mantine/core";
import { Logo1, Logo2, Logo3 } from "../../assets/icons";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

export const TopLogo = () => {
  const navigate =  useNavigate()
  const {pathname} = useLocation()

  const [activeLogo, setActiveLogo] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveLogo((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const isAuthPage = pathname === '/auth'

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/')

  return (
    <Center className={style["logo-container"]}>
      {isAuthPage && <IoMdArrowBack onClick={goBack}  className={style["backIcon"]} />}
      <Logo1 onClick={goHome}
        className={`${style["logo"]} ${activeLogo === 0 && style["active"]}`}
      />

      <Logo2 onClick={goHome}
        className={`${style["logo"]} ${activeLogo === 1 && style["active"]}`}
      />

      <Logo3 onClick={goHome}
        className={`${style["logo"]} ${activeLogo === 2 && style["active"]}`}
      />

      {isAuthPage && <Text>Қаз</Text>}
    </Center>
  );
};

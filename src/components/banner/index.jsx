import { Carousel } from "@mantine/carousel";
import styles from "./style.module.css";

export const Banner = ({ imgs }) => {
  return (
    <Carousel
    slideSize={"282px"}
    slideGap="12px"
      withIndicators={false}
      withControls={false}
      height={351}
      loop={true}
      mt="25px"
      align="start"
      styles={{
        slide: {
          padding: "0 0 0 16px",
        },
        // indicator: {
        //   width: "14px",
        //   height: "8px",
        //   transition: "width 250ms ease",
        //   background: "#f00",
        // },
      }}
    >

      {imgs?.map((img, i) => (
        <Carousel.Slide key={i}>
          <img className={styles.img} src={img.url} alt={img.title} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

import { Box, Card, Center, Image, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import styles from './style.module.css';


export const Banner = () => {

  return     <Carousel withIndicators withControls={false} height={215} dragFree slideGap="0px" align="start" 
  styles={{
    slide: {
      background: '#fff',
      marginTop: '10px',
      padding: '15px 20px 30px',
      borderRadius: '10px'
    },
    indicator: {
      width: "14px",
      height: "8px",
      transition: "width 250ms ease",
      background: '#f00'
    }
  }}>
  <Carousel.Slide>
    <Card className={styles.banner}>
      <Text className={styles.text}>Maktab bozori</Text>
    </Card>
  </Carousel.Slide>
  <Carousel.Slide>
    <Card className={styles.banner}>
      <Text className={styles.text}>Zara brendi</Text>
    </Card>
  </Carousel.Slide>


  {/* ...other slides */}
</Carousel>

  return (
      <Carousel
        loop
        withIndicators
        withControls={false}
        height={200}
        slideGap="20px"
        styles={{
          container: {
            background: 'red',
            padding: '20px',
            borderRadius: '10px'
          },

          indicator: {
            width: 15,
            height: 8,
            background: '#d4d4d4',
            '&[data-active]': {
              background: '#0077ff',
            },
          },
        }}
      >
        <Carousel.Slide>
          <Card className={styles.banner}>
            <Text className={styles.textOverlay}>Maktab bozori</Text>
            <div className={styles.imageOverlay}>
              {/* <img
                className={styles.imageItem}
                src="https://via.placeholder.com/120x150" // Replace with your image URL
                alt="Backpack"
              /> */}
            </div>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card className={styles.banner}>
            <Text className={styles.textOverlay}>Maktab bozori</Text>
            <div className={styles.imageOverlay}>
              {/* <img
                className={styles.imageItem}
                src="https://via.placeholder.com/100x100" // Replace with your image URL
                alt="Pencil case"
              /> */}
            </div>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card className={styles.banner}>
            <Text className={styles.textOverlay}>Maktab bozori</Text>
            <div className={styles.imageOverlay}>
              {/* <img
                className={styles.imageItem}
                src="https://via.placeholder.com/100x50" // Replace with your image URL
                alt="Scissors"
              /> */}
            </div>
          </Card>
        </Carousel.Slide>
        {/* Add more slides if needed */}
      </Carousel>
    // <Center bg="white" bd="1px solid" style={{borderRadius: '10px'}} mt="20px" p="10px 20px">

    // </Center>
  );
};
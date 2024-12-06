import { useRef } from 'react'
import YandexMap from '../../components/YandexMap'
import { YMapMarker } from 'ymap3-components';
import { MdLocationOn } from 'react-icons/md';
import { LogoFrameIcon } from '../../assets/icons';
import { Center, Stack, Text, Title } from '@mantine/core';
import { Footer } from '../../components/footer';



export const Shop = () => {
 const mapRef2 = useRef()
 const mapLocation = [69.28795, 41.355747]

 const handleMapChange = () => {}
 const setYMap2 = () => {}

  return (
    <>
    <Stack p="16px">
      <Title order={2} fw="700">
        Магазины Лемана ПРО
      </Title>
      <YandexMap
        borderRadius="16px"
        ref={mapRef2}
        overflow="hidden"
        location={{ center: mapLocation, zoom: 10 }}
        onClick={handleMapChange}
        setYMap={setYMap2}
        h="calc(100vh - 280px)"
      >
    
        <YMapMarker coordinates={mapLocation}>
            <Icon
              style={{
                color: 'lightseagreen',
                width: "42px",
                height: "42px",
              }} />
        </YMapMarker>
      </YandexMap>
      {description.map((desc, i) => {
        return <Text c="#919395" mb={i == 2 && '30px'} fz="12px" key={desc}>{desc}</Text>
      })}
    </Stack>
    <Footer />
    </>
  )
}


const Icon = () => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="42" height="42" rx="21" fill="#FDC300"></rect>
    <rect x="1" y="1" width="42" height="42" rx="21" stroke="white" strokeWidth="2"></rect>
    <path d="M31.5411 19.3906V31.3333H18.2422L19.3225 26.3698H25.758V21.7324L22.7558 18.7622L26.0746 13.9864L31.5411 19.3906ZM26.0746 13.9864L22.0001 18.0161L18.2422 21.7324V31.3333H12.4589V19.3906L21.9999 9.95834L26.0746 13.9864Z" fill="#21282B"></path>
    </svg>
  )
}

const description = [
  'Компания Лемана ПРО (Леруа Мерлен) активно развивается в Казахстане, планирует открытие новых магазинов. Благодаря широкому ассортименту товаров и отлично продуманной ценовой политике, мы завоевываем признание все большего количества покупателей и стремимся в наиболее полной мере удовлетворять их потребности в строительных, отделочных материалах и товарах для дома.',
  'Магазины Лемана ПРО (Леруа Мерлен) располагаются в Казахстане в наиболее удобных для горожан местах, работают по удобному для посетителей графику.',
  'Лемана ПРО (Леруа Мерлен) предлагает широкий выбор товаров по низким ценам для жителей Алматы, таких как Алматы, Астана, Караганда, Усть-Каменогорск, Атырау, Шымкент, Петропавловск, Актобе, Павлодар, Актау, Уральск, Костанай, Семей, Кызылорда, Экибастуз, Тараз, Кокшетау, Жезказган, Талдыкорган и Рудный. Вы можете заказать необходимые товары онлайн с доставкой во все эти города или посетить один из наших розничных магазинов.',
]

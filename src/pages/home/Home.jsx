
import { Banner } from '../../components/banner'
import { Catalog } from '../../components/catalog'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { NewArrivals } from '../../components/new-arrivals'
import { RenderProductsSection } from '../../components/render-products-section'
import classes from './style.module.css'

const Home = () => {
  return (
    <main className={classes.main}>
      <Banner imgs={banner1Imgs}/>
      <RenderProductsSection title="Готовимся к Новому году" products={products}/> 
      <Banner imgs={banner2Imgs}/>
      <RenderProductsSection title="Выгодная покупка" products={products2}/> 
      {/* <Catalog /> */}
      {/* <NewArrivals /> */}
      <Footer />
    </main>
  )
}

export default Home

const banner1Imgs = [
  {
    title: 'title',
    url : "https://cdn.leroymerlin.ru/lmru/image/upload/q_90/f_auto/dpr_2.0/w_528/h_660/v1718742121/fudzi/fudzi/ktRCpL8jhdO5RJUHd4f3L/likvidaciya-new-m.png/likvidaciya-new-m.png",
  },
  {
    title: 'title',
    url : "https://cdn.leroymerlin.ru/lmru/image/upload/q_90/f_auto/dpr_2.0/w_528/h_660/v1718891809/fudzi/fudzi/R6BfbyDFnWodTBqSqJ4Mg/mobile.png/mobile.png",
  },
  {
    title: 'title',
    url : "https://cdn.leroymerlin.ru/lmru/image/upload/q_90/f_auto/dpr_2.0/w_528/h_660/v1732603637/fudzi/fudzi/YKvncJEZucyW-FSSXDSvq/novyy-god-m.png/novyy-god-m.png",
  },

]

const banner2Imgs = [
  {
    title: 'title',
    url : "https://cdn.leroymerlin.ru/lmru/image/upload/q_90/f_auto/dpr_2.0/w_528/h_660/v1718741466/fudzi/fudzi/wZ0NyZCiItIbwVew3p4Hg/mbath-2.png/mbath-2.png"
  },
  {
    title: 'title',
    url : "https://cdn.leroymerlin.ru/lmru/image/upload/q_90/f_auto/dpr_2.0/w_528/h_660/v1731913397/fudzi/fudzi/ASDciwsPK8DDGrIvRYRqX/keshbek3-kz.png/keshbek3-kz.png"
  },
  {
    title: 'title',
    url : "https://cdn.leroymerlin.ru/lmru/image/upload/q_90/f_auto/dpr_2.0/w_528/h_660/v1731913331/fudzi/fudzi/tR4vHE6e1DBlzBxFTOAac/mdostavka-kz.png/mdostavka-kz.png"
  },

]

const imgs = [
  "https://cdn.leroymerlin.ru/lmru/image/upload/dpr_2.0,f_auto/q_auto/w_156/h_156/c_pad/b_white/d_photoiscoming.png/v1697817392/lmcode/_URN194dfku3g-XJNB9Msg/14047010.jpg",
  "https://cdn.leroymerlin.ru/lmru/image/upload/dpr_2.0,f_auto/q_auto/w_156/h_156/c_pad/b_white/d_photoiscoming.png/v1697527622/lmcode/CLxNcumDtkO_jbzUBoPMTQ/87547188.jpg",
  "https://cdn.leroymerlin.ru/lmru/image/upload/dpr_2.0,f_auto/q_auto/w_156/h_156/c_pad/b_white/d_photoiscoming.png/v1732897403/lmcode/FS5tXH0BPUe8BYmEusUj0A/89381659.png",
  "https://cdn.leroymerlin.ru/lmru/image/upload/dpr_2.0,f_auto/q_auto/w_156/h_156/c_pad/b_white/d_photoiscoming.png/v1729515355/lmcode/lHSAz14ZrUu8Aj2Kg3jeDg/89380284.png",
];

const products = [
  {
    id: 1,
    name: "Ель новогодняя искусственная «Красивая» 180 см",
    image: imgs[0],
    originalPrice: 35990,
    currentPrice: 26990,
    rating: 5,
    ratingCount: 1,
    onSale: true,
  },
  {
    id: 2,
    name: "Композиция новогодняя светодиодная Карусель 20x18x23",
    image: imgs[1],
    originalPrice: 17660,
    currentPrice: 12990,
    onSale: true,
  },
  {
    id: 3,
    name: "Гирлянда Хвоя 270 см 20 LED",
    image: imgs[2],
    currentPrice: 3990,
  },
  {
    id: 4,
    name: "Гирлянда светодиодная занавес электрическая",
    image: imgs[3],
    originalPrice: 2790,
    currentPrice: 1690,
    onSale: true,
  },
];


const imgs2 = [
  "https://cdn.leroymerlin.ru/lmru/image/upload/dpr_2.0,f_auto/q_auto/w_128/h_128/c_pad/b_white/d_photoiscoming.png/v1713265706/lmcode/1SHNVi_SCEqYCpaWBUCVCQ/88935311.jpg",
  "https://cdn.leroymerlin.ru/lmru/image/upload/dpr_2.0,f_auto/q_auto/w_128/h_128/c_pad/b_white/d_photoiscoming.png/v1732891485/lmcode/ggPJrmCT3ECSG3UZWKfrKg/89386649_01.jpg",
  "https://cdn.leroymerlin.ru/lmru/image/upload/dpr_2.0,f_auto/q_auto/w_128/h_128/c_pad/b_white/d_photoiscoming.png/v1669385415/lmcode/bDLcvy2ufUq6F4EysWnMzw/85087716.png",
  "https://cdn.leroymerlin.ru/lmru/image/upload/dpr_2.0,f_auto/q_auto/w_128/h_128/c_pad/b_white/d_photoiscoming.png/v1710861642/lmcode/9letcff7NE2lucojX7MdCA/86222820.jpg",
]


const products2 = [
  {
    id: 5,
    name: "Штора на ленте Inspire Ryazan 200x280 см цвет розовый",
    image: imgs2[0],
    originalPrice: 22150,
    currentPrice: 15430,
    ratingCount: 1,
    onSale: true,
  },
  {
    id: 6,
    name: "Люстра потолочная светодиодная Schaffner Quieto 1905-2 с пультом управления 18 м² регулируемый белый свет цвет белый",
    image: imgs2[1],
    currentPrice: 12460,
  },
  {
    id: 7,
    name: "Тепловая пушка электрическая Monlan MPK-30R 3000 Вт",
    image: imgs2[2],
    currentPrice: 14260,
  },
  {
    id: 8,
    name: "Зеркало для ванной Light Led с подсветкой 40x60 см цвет белый",
    image: imgs2[3],
    currentPrice: 13350,
  },
];

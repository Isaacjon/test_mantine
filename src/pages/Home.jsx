
import { Banner } from '../components/banner'
import { Catalog } from '../components/catalog'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { NewArrivals } from '../components/new-arrivals'
import { Sidebar } from '../components/sidebar'
import { TopLocation } from '../components/top-location'
import classes from './style.module.css'
const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];
const Home = () => {
  return (
    <main className={classes.main}>

      <TopLocation />
      <Header />
      <Banner />
      <Catalog />
      <NewArrivals />
      <Footer />

      <Sidebar />
    </main>
  )
}

export default Home
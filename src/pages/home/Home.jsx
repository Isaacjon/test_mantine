
import { Banner } from '../../components/banner'
import { Catalog } from '../../components/catalog'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { NewArrivals } from '../../components/new-arrivals'
import { TopLocation } from '../../components/top-location'
import classes from './style.module.css'

const Home = () => {
  return (
    <main className={classes.main}>
      <TopLocation />
      <Header />
      <Banner />
      <Catalog />
      <NewArrivals />
      <Footer />
    </main>
  )
}

export default Home
import Abertura from '../components/abertura/Abertura'
import Banner from '../components/banner/Banner'
import Cards from '../components/cards/Cards'
import Carrousel from '../components/carrousel/Carrousel'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Servicos from '../components/servicos/Servicos'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Abertura />
      <div className={styles.conteudo + ` container bg-light`}>
        <Banner src="/imgs/img3.JPG" />
        <Servicos header={true} />
        <Carrousel />
        <Cards />
      </div>
      <Footer />
    </div>
  )
}

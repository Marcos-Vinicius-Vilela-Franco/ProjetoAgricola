import Abertura from "../components/abertura/Abertura";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Banner2 from '../components/banner2/Banner2';
import NavBar from "../components/navbar/NavBar";
import styles from '../styles/Empresa.module.css'
export default function Empresa() {
    return (
        <div className={styles.main}>
            <NavBar />
            <Banner2 texto="Empresa"/>
            <div className="bg-light container pb-5 " style={{"padding-top":"260px"}}>
                <Banner src="/imgs/capturar.jpg" />
            </div>
            <Footer />
        </div>
    )
}
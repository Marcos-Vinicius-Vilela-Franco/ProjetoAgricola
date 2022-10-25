import Footer from "../components/footer/Footer";
import Banner2 from '../components/banner2/Banner2';
import NavBar from "../components/navbar/NavBar";
import styles from '../styles/Empresa.module.css'
import Servicos from "../components/servicos/Servicos";

export default function Atividades() {
    return (
        <div className={styles.main} >
            <NavBar/>
            <Banner2 texto="Serviços" />
            <div className="bg-light container " style={{ "padding-top": "280px" }}>
                <Servicos header={false} />
            </div>
            <Footer />
        </div>
    )
}
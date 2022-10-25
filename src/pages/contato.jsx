import Footer from "../components/footer/Footer";
import Banner2 from '../components/banner2/Banner2';
import NavBar from "../components/navbar/NavBar";
import styles from '../styles/Empresa.module.css'
import Image from "next/image";
import Mapa from '../components/mapa/Mapa'
export default function Contato() {
    return (
        <div className={styles.main} >
            <NavBar />
            <Banner2 texto="Contato" />
            <div className="bg-light container pb-5 " style={{ "padding-top": "300px"}}>
                <div className={styles.content + ` pt-5 pb-5`}>
                    <div className="row featurette p-2 w-75 d-flex d-flex align-items-center">
                        <div className="col-md-5 ">
                            < Image className=" bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={"/imgs/capturar.JPG"} alt={"imagem"} width={800} height={500} />
                            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                        </div>
                        <div className="col-md-7 p-3">
                            <h2 className="featurette-heading"> Endereço e telefone</h2>
                            <p className="lead"> Av. Pio XII, 35 - Vila Santa Maria, Jataí-GO, 75800-088</p>
                            <p className="lead">info@example.com</p>
                            <p className="lead"> (64) 3631-7060</p>
                        </div>
                    </div>
                </div>



                <div className="d-flex mb-5" style={{
                    width: "100%",
                    height: "350px",
                    "-webkit-box-shadow": "1px 11px 19px -3px rgba(0,0,0,0.75)",
                    "-moz-box-shadow": "1px 11px 19px -3px rgba(0,0,0,0.75)",
                    "box-shadow": "1px 11px 19px -3px rgba(0,0,0,0.75)",
                   
                    right: 0,

                }}>
                    <Mapa />
                </div>
            </div>
            <Footer />
        </div>
    )
}
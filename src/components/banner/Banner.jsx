import styles from './Banner.module.css'
import Image from 'next/image'
export default function Banner(props) {

    return (   
            <div className={styles.content }>
                <div className={`row featurette p-1 w-75`}>
                    <div className="col-md-7 p-2">
                        <h2 className="featurette-heading"> Agrícola <span className="text-muted">Comércio e Representação de Produtos Agropecuários </span></h2>
                        <p className="lead">Agrícola Comércios e Representações de Produtos Agrícolas Ltda, tem como objetivo o segmento de vendas de semente de milho ,soja, sorgo , Nutrição Foliar e Biológicos.</p>
                    </div>
                    <div className="col-md-5 ">
                        < Image className=" bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={props.src} alt={"imagem"} width={600} height={400} />
                    </div>
                </div>
            </div>
    )
}

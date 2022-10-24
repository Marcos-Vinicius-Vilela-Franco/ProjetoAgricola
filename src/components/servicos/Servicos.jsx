import styles from './Servicos.module.css'
import Image from 'next/image';
export default function Servicos(props) {
    return ( 
        <div className="container   d-flex flex-column ">
           {props.header ? <div className="display-4 p-2 border-bottom ">Serviços</div> :''}
            <div className={styles.content + ` `}>

                <div className="row featurette p-2 w-75 d-flex d-flex align-items-center">
                    <div className="col-md-5 ">
                        < Image className=" bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={"/imgs/nutri.JPG"} alt={"imagem"} width={800} height={500} />
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    </div>
                    <div className="col-md-7 p-3">
                        <h2 className="featurette-heading"> Nutrição Foliar <span className="text-muted">e Biológicos</span></h2>
                        <p className="lead"> Um número cada vez maior de agricultores está procurando maneiras para trabalhar de forma mais ecológica e, portanto, está recorrendo à nutrição foliar como opção preferida. A nutrição foliar é, na verdade, o instrumento ideal para alcançar os melhores resultados no que diz respeito à proteção ambiental.</p>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className="row featurette p-1 w-75 d-flex d-flex align-items-center">
                    
                    <div className="col-md-7 p-3">
                        <h2 className="featurette-heading">Vendas de sementes de Milho, <span className="text-muted">Soja e Sorgo</span></h2>
                        <p className="lead">Trabalhamos hoje, com uma das mais altas tecnologias em Variedades e Tolerâncias à pragas existentes no mercado. Produtos que atendem todas as necessidades e as mais diversas exigências no campo e do produtor. Sementes com alto poder produtivo, selecionada, com excelente pureza e umas das maiores qualidades do mercado.  </p>
                    </div>
                    <div className="col-md-5 ">
                        < Image className=" bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={"/imgs/sementes.jpeg"} alt={"imagem"} width={800} height={500} />
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>
            </div>


        </div>


    )
}
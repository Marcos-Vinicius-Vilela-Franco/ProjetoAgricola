import styles from './Footer.module.css'
import Link from 'next/link'
export default function Footer() {
    return (

        <footer className={`text-center text-lg-start bg-light text-muted ` + styles.footer}>
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div className="me-5 d-none d-lg-block">
                    <span>Conecte-se conosco nas redes sociais:</span>
                </div>

                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <section >
                <div className="container text-center text-md-start mt-4">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Agrícola Comércio e Representação de Produtos Agropecuários
                            </h6>
                            <p>
                                A empresa Agrícola Comércio E Representacão De Prod. Agropecuários que tem como razão social Agrícola Com E Rep De Produtos Agropecuarios Ltda foi fundada em 14/04/1994 e está cadastrada na Solutudo no segmento de Produtos Agrícolas com o CNPJ 97.405.203/0001-08.
                            </p>
                        </div>
                        <div className="d-flex flex-column align-items-startcol-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
                            <p>Av. Pio XII, 35 - Vila Santa Maria, Jataí-GO, 75800-088</p>
                            <p>
                                info@example.com
                            </p>
                            <p> (64) 3631-7060</p>

                        </div>

                    </div>

                </div>
            </section>



            <div className="text-center p-0" >
                © 2022 Copyright: Agrícola Comércio e Representação de Produtos Agropecuários
                <Link href="https://www.linkedin.com/in/marcos-vinicius-vilela-franco-941508186/" >
                   <div className='mb-3'><p className='fs-6 mt-3 mb-0'>Desenvolvido por</p> <div className="text-reset fw-bold" style={{cursor:"pointer"}} > Marcos V. V. Franco</div></div>
                </Link>
            </div>

        </footer>

    )
}
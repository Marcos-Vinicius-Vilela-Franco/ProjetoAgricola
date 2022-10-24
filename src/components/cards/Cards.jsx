import Image from "next/image"
import styles from './Card.module.css'



export default function Cards() {
    return (
        <div className={`container bg-light d-flex h-auto flex-column rounded ` + styles.content}>
            <div className="display-4 p-2 border-bottom mb-3">Marcas</div>
            <div className="d-flex flex-wrap  justify-content-center ">
                <div className={`card ` + styles.cartao}>
                    <Image className="card-img-top" src="/imgs/marcas/alltech.jpg" alt="imagem alltech" width={286} height={180} />
                    <div className="card-body">
                        <p className="card-text">  fornecemos produtos e soluções naturais para os desafios agronômicos e hortícolas enfrentados pelos produtores em todo o mundo, abordando a produção de citros, silagem e tudo mais.</p>
                    </div>
                </div>
                <div className={`card ` + styles.cartao}>
                    <Image className="card-img-top p-4" src="/imgs/marcas/biomatrix.png" alt="imagem biomatrix" width={286} height={110} />
                    <div className="card-body">
                        <p className="card-text text-stard"> O melhor em genética e tecnologia de ponta em sementes de milho e sorgo para produção de grãos e silagem de alta qualidade, visando aumentar a produtividade no campo e proporcionar máxima adaptação e retorno aos produtores de grãos, leite e carne.</p>
                    </div>
                </div>
                <div className={`card ` + styles.cartao}>
                    <Image className="card-img-top p-2" src="/imgs/marcas/bioshera.jpg" alt="imagem bioshera" width={280} height={180} />
                    <div className="card-body">
                        <p className="card-text text-stard">  Sediada em Londrina, no norte do Paraná, a BIOSPHERA tem em seu DNA o empreendedorismo e a inovação no desenvolvimento de pesquisas e novas tecnologias de maneira sustentável.</p>
                    </div>
                </div>
                <div className={`card ` + styles.cartao}>
                    
                    <Image className="card-img-top p-3" src="/imgs/marcas/MICROQUIMICA.jpg" alt="imagem MICROQUIMICA" width={286} height={180} />
                    
                    <div className="card-body">
                        <p className="card-text text-stard">  Com duas fábricas localizadas na região de Campinas (SP), Brasil, a Microquimica vem fortalecer a capacidade e flexibilidade produtiva da Sapec Agro Business, aliando às suas capacidades industriais que servem às Américas.</p>
                    </div>
                </div>
                <div className={`card ` + styles.cartao}>
               
                    <Image className="card-img-top p-2" src="/imgs/marcas/transferir.jpg" alt="imagem transferir" width={286} height={180} />
                    <div className="card-body">
                        <p className="card-text text-stard">  Desenvolvimento, produção e comercialização de nutrientes minerais, organominerais, biofertilizantes e inoculantes para a nutrição vegetal de acordo com os requisitos regulamentares estabelecidos pelo ministério da agricultura, pecuária e abastecimento.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

{/*  */ }

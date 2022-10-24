import Image from "next/image"
export default function CardServicos() {
    return (
        <div className="card mb-3" style={{"max-width": "800px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                < Image className="img-fluid rounded-start" src={"/imgs/trator.JPG"} alt={"imagem"} width={540} height={450} />
                    {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Sementes</h5>
                        <p className="card-text">Trabalhamos hoje, com uma das mais altas tecnologias em Variedades e Tolerâncias à pragas existentes no mercado. Produtos que atendem todas as necessidades e as mais diversas exigências no campo e do produtor. Sementes com alto poder produtivo, selecionada, com excelente pureza e umas das maiores qualidades do mercado.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
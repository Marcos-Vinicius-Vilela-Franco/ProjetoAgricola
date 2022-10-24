import fundo from '../../../public/imgs/trator.jpg'

export default function Abertura() {
    return (
        <div className="d-flex mb-5" style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .4) ),url(${fundo.src})`,
            width: "100%",
            height: "300px",
            backgroundPosition: " 0 0, 40% 40%",
            backgroundRepeat: "  no-repeat",
            backgroundSize: "cover",
            WebkitBoxShadow: "1px 11px 19px -3px rgba(0,0,0,0.75)",
            MozBoxShadow: "1px 11px 19px -3px rgba(0,0,0,0.75)",
            boxShadow: "1px 11px 19px -3px rgba(0,0,0,0.75)",
            position: "absolute",
            right: 0

        }}>
            <div className='container d-flex  flex-column justify-content-start'>
                <div className='display-3 text-light  ' style={{marginTop:"50px"}}>Agrícola</div>
                <div className='display-3 text-light fw-bolder'>Na evolução com o produtor</div>
            </div>

        </div >
    )
}
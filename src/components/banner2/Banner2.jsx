import fundo from '../../../public/imgs/img.jpg'

export default function Abertura(props) {
    return (
        <div className="d-flex mb-5" style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .4) ),url(${fundo.src})`,
            width: "100%",
            height: "300px",
            "background-position": " 0 0, 40% 40%",
            "background-repeat": "  no-repeat",
            "background-size": "cover",
            "-webkit-box-shadow": "1px 11px 19px -3px rgba(0,0,0,0.75)",
            "-moz-box-shadow": "1px 11px 19px -3px rgba(0,0,0,0.75)",
            "box-shadow": "1px 11px 19px -3px rgba(0,0,0,0.75)",
            position: "absolute",
            right: 0

        }}>
            <div className='container d-flex align-items-center'>
                <div className='display-3 text-light fw-bolder'>{props.texto}</div>
            </div>

        </div >
    )
}
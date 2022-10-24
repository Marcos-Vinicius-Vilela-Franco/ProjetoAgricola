import Link from 'next/link'
import styles from './Header.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className="container ">
                <header className="d-flex flex-wrap justify-content-center py-3 ">
                    <Link href="/">
                        <a className="d-flex align-items-center mb-1 mb-md-0 me-md-auto text-success text-decoration-none">
                            <h1 className="display-5">Agrícola</h1>
                        </a>
                    </Link>

                    <ul className="nav d-flex align-items-center ">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link link-secondary" aria-current="page">Início</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/empresa">
                                <a className="nav-link link-secondary">Empresa</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/atividades">
                                <a className="nav-link link-secondary">Serviços</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contato">
                                <a className="nav-link link-secondary">Contato</a>
                            </Link>
                        </li>
                        {/* <li className="nav-item"><a href="#" className="nav-link">About</a></li> */}
                    </ul>
                </header>
            </div>
        </div>
    )
}
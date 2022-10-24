import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';

export default function Copia() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='d-flex justify-content-between '>
                <Link href="/">
                    <Navbar.Brand style={{cursor:"pointer"}} className='p-0'>
                        <Image  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={'/imgs/logo.png'} alt={"imagem"} width={102} height={80} />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ "flexGrow": 0 }}>
                    <Nav className="me-auto">
                        <Link href="/">
                            <Nav.Link  href="/" >Início</Nav.Link>
                        </Link>
                        <Link href="/empresa">
                            <Nav.Link href="/empresa">Empresa</Nav.Link>
                        </Link>
                        <Link href="/atividades">
                        <Nav.Link href="/atividades">Serviços</Nav.Link>
                        </Link>
                        <Nav.Link href="/contato">Contato</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
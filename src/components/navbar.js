import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom"


const Navbar = () => {

    return (
        <div>
            <div>
                <div>instagram facebook otros links</div>
                <div>
                    <Link to="/">Caracola</Link>
                    <a href="https://valentinkrajzelman.mercadoshops.com.ar/?mshops-cookie-isguest=false&mshops-redirection-timestamp=1656157875972&mshops-cookie-cp=1031" target='blank' rel='noreferrer'>Piezas</a>
                    <Link to="/talleres">Talleres</Link>
                    <HashLink smooth to={"#comoProducimos"}>Como Producimos</HashLink>
                    <HashLink smooth to={'#quienesSomos'}>Quienes somos</HashLink>
                    <HashLink smooth to={'#contacto'}>Contacto</HashLink>
                    <HashLink smooth to={'#preguntasFrecuentes'}>Preguntas frecuentes</HashLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
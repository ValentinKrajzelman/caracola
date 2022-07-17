import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom"

import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';


//pone el link a shops en .env por que tiene el codigo postal y otros datos personales
const Navbar = () => {

    return (
        <div>
            <div>
                <div className='flex place-content-end text-xl py-1 border-solid border-black border-b-2'>
                    <a href="https://www.instagram.com/tienda.caracolameg/?hl=en" target='blank' rel='noreferrer'><AiFillInstagram className='mr-2' /></a>
                    <a href="https://www.facebook.com/caracolapiesasunicas/posts/" target='blank' rel='noreferrer'><AiFillFacebook className='mr-2' /></a>
                </div>
                <div className='grid grid-cols-5 py-8 mb-16'>
                    <Link to="/" className='text-4xl col-start-1 pl-10'>Caracola</Link>
                    <div className='text-base col-start-2 col-end-6 flex place-content-evenly pt-2'>

                        <a href="https://valentinkrajzelman.mercadoshops.com.ar/?mshops-cookie-isguest=false&mshops-redirection-timestamp=1656157875972&mshops-cookie-cp=1031" target='blank' rel='noreferrer'>Tienda</a>
                        <Link to="/talleres">Talleres</Link>
                        <HashLink smooth to={'#quienesSomos'}>Quienes somos</HashLink>
                        <HashLink smooth to={'#contacto'}>Contacto</HashLink>
                        <HashLink smooth to={'#preguntasFrecuentes'}>Preguntas frecuentes</HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
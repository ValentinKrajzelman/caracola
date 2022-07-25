import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom"
import gatocono from "../fotos/gatocono.png";
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
                    <div className='flex items-center ml-8'>
                        <div className='relative min-w-[4rem] min-h-[4rem] rounded-full overflow-hidden pb-10'>
                            <img src={gatocono} className='absolute max-w-[5rem] max-h-[5rem]'></img>
                        </div>
                        <Link to="/" className='text-4xl col-start-1 pl-3'>Caracola</Link>
                    </div>
                    <div className='text-base col-start-2 col-end-6 flex place-content-evenly pt-2'>
                        <HashLink smooth to={'#quienesSomos'}>Talleres</HashLink>
                        <HashLink smooth to={'#quienesSomos'}>Tienda</HashLink>
                        <HashLink smooth to={'#quienesSomos'}>Quienes somos</HashLink>
                        <HashLink smooth to={'#contacto'}>Contacto</HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
import { MdCopyright } from 'react-icons/md';
import gatocono from "../fotos/gatocono.png";
import ContactForm from "./contactForm";



const Footer = () => {

    return (

        <div className="bg-black bg-opacity-25">
            <div className="flex flex-row place-content-between items-center  mt-5">
                <div className='flex flex-col'>
                    <div className='flex flex-row place-items-center ml-5 '>
                        <div className='relative min-w-[3rem] min-h-[3rem] rounded-full overflow-hidden pb-10'>
                            <img src={gatocono} className='absolute max-w-[4rem] max-h-[4rem]'></img>
                        </div>
                        <div className='ml-3'>Caracola piezas unicas</div>
                    </div>
                    <div className='flex place-items-center pt-5 pl-5'><MdCopyright className='text-sm pt-1' />valentin krajzelman 2022</div>
                </div>

                <div className='flex flex-col'>
                    <div>Contacto</div>
                    <div>wsp: +54541687431</div>
                    <div>email: eugenia@hotmail.com</div>
                </div>

                <ContactForm />
            </div>
        </div>
    );
};

export default Footer;
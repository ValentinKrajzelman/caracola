import imagenChica1 from "../fotos/imagenChica1.png";
import imagenChica2 from "../fotos/imagen chica 2.png";
import imagenlarga from "../fotos/imagen larga.png";

import { BiRightArrow } from 'react-icons/bi';

const Hero = () => {

    return (

        <div>
            <div className="grid grid-cols-12 grid-rows-6 h-[41rem] w-[89rem] bg-red-500 ">
                <div className="col-start-2 row-start-2 col-span-8 text-7xl pl-2">Piezas unicas de tu hogar.</div>
                <a href="https://valentinkrajzelman.mercadoshops.com.ar/?mshops-cookie-isguest=false&mshops-redirection-timestamp=1656157875972&mshops-cookie-cp=1031" target='blank' rel='noreferrer' className="flex col-start-8 row-start-3 col-span-2">
                    <div className="">Explorar tienda</div><BiRightArrow className="pt-2 text-sm" />
                </a>
                <div className="relative overflow-hidden col-start-10 row-start-1 col-span-3 row-span-3 max-w-[22rem] max-h-[325px] pt-1 pr-2">
                    <img src={imagenChica1} className='absolute max-h-fit '></img>
                </div>

                <div className="relative overflow-hidden col-start-10 row-start-4 col-span-3 row-span-3 max-w-[22rem] max-h-[325px] pt-1 pr-5">
                    <img src={imagenChica2} className='absolute max-h-fit'></img>
                </div>

                <div className="relative overflow-hidden col-start-1 row-start-4 col-span-9 row-span-3 min-w-[22rem] min-h-72 pt-1 mb-1 mx-1">
                    <img src={imagenlarga} className='absolute min-h-full min-w-full'></img>
                </div>
            </div>
        </div>
    );
};

export default Hero;
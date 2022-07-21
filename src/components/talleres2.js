import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import imagen from '../fotos/imagen taller.jpg';

const taller1 = {
    imagen: imagen,
    nombre: 'taller1',
    descripcion: "kkhdfkdfkhdfkldfndifdhfldkjfkdjnbfoidyfndfkhdkuhfkdnfoihdkfbndkifdkjnfldifdnfldufjodmfldhfdlfudhpfndloihfdnfldhifodnfon khdfkdfkhdfkldfndifdhfldkjfkdjnbfoidyfndfkhdkuhfkdnfoihdkfbndkifdkjnfldifdnfldufjodmfldhfdlfudhpfndloihfdnfldhifodnfon khdfkdfkhdfkldfndifdhfldkjfkdjnbfoidyfndfkhdkuhfkdnfoihdkfbndkifdkjnfldifdnfldufjodmfldhfdlfudhpfndloihfdnfldhifodnfond",
    sede: '123 paso xddd la plata',
    email: 'cosas@hotmai.com',
    tel: '123445765768',
};
const taller2 = {
    imagen: imagen,
    nombre: 'taller2',
    descripcion: "khdfkdfkhdfkldfndifdhfldkjfkdjnbfoidyfndfkhdkuhfkdnfoihdkfbndkifdkjnfldifdnfldufjodmfldhfdlfudhpfndloihfdnfldhifodnfon ",
    sede: '123 paso xddd la plata',
    email: 'cosas@hotmai.com',
    tel: '123445765768',
};
const taller3 = {
    imagen: imagen,
    nombre: 'taller3',
    descripcion: "khdfkdfkhdfkldfndifdhfldkjfkdjnbfoidyfndfkhdkuhfkdnfoihdkfbndkifdkjnfldifdnfldufjodmfldhfdlfudhpfndloihfdnfldhifodnfon",
    sede: '123 paso xddd la plata',
    email: 'cosas@hotmai.com',
    tel: '123445765768',
};

const talleres = [taller1, taller2, taller3];
let talleresElementos = [];

for (let x = 0; x < talleres.length; x++) {
    talleresElementos[x] =
        <div className='relative flex flex-row min-h-[41rem] min-w-[89rem]'>
            <div className='absolute h-full w-full'>
                <img src={talleres[x].imagen} className='h-full w-full'></img>
            </div>
            <div className='flex flex-col place-content-between z-10 w-full'>
                <div className='flex flex-row place-content-between px-10 bg-slate-700 bg-opacity-50'>
                    <div className='pl-24 py-2  text-5xl'>
                        {talleres[x].nombre}
                    </div>
                    <div className='flex flex-col pr-5 py-2'>
                        <div>
                            {talleres[x].sede}
                        </div>
                        <div>
                            {talleres[x].tel}
                        </div>
                        <div>
                            {talleres[x].email}
                        </div>
                    </div>
                </div>
                <div className='bg-slate-700 bg-opacity-50 px-10 py-7'>
                    {talleres[x].descripcion}
                </div>
            </div>
        </div>
}


const Talleres2 = () => {

    const [inset, setInset] = useState(0);

    const slider = (direccion) => {

        if (inset == talleres.length - 1 && direccion == 1) {
            return 0
        }

        else if (inset == 0 && direccion == -1) {
            return talleres.length - 1
        }

        else return inset + direccion

    }

    // const slider = (direccion) => {

    //     console.log(talleresElementos);
    //     if (inset == 89 * (talleres.length - 1) && direccion == 1) {
    //         // setInset(0)
    //         return 0
    //     }
    //     else if (inset == 0 && direccion == -1) {
    //         // setInset(89 * talleres.length)
    //         return (89 * (talleres.length - 1))
    //     }
    //     else {
    //         // setInset(inset + (89 * direccion))
    //         return inset + (89 * direccion)
    //     }

    // };

    return (
        <div className="relative flex flex-row place-content-between overflow-hidden h-[41rem] w-[89rem] mb-24  text-white ">
            <button onClick={() => setInset(slider(-1))} className='z-50'><BsFillArrowLeftCircleFill className='ml-5 text-3xl z-50' /></button>
            <div className={'absolute'} >
                {talleresElementos[inset]}
            </div>
            <button onClick={() => setInset(slider(1))} className='z-50'><BsFillArrowRightCircleFill className='mr-5 text-3xl z-50' /></button>
        </div>
    );
}

export default Talleres2;
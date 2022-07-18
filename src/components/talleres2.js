import React, { useState } from 'react';

import imagen from '../fotos/imagen taller.jpg';

const taller1 = {
    imagen: imagen,
    nombre: 'taller1',
    descripcion: "khdfkdfkhdfkldfndifdhfldkjfkdjnbfoidyfndfkhdkuhfkdnfoihdkfbndkifdkjnfldifdnfldufjodmfldhfdlfudhpfndloihfdnfldhifodnfon",
    sede: '123 paso xddd la plata',
    email: 'cosas@hotmai.com',
    tel: '123445765768',
};
const taller2 = {
    imagen: imagen,
    nombre: 'taller2',
    descripcion: "khdfkdfkhdfkldfndifdhfldkjfkdjnbfoidyfndfkhdkuhfkdnfoihdkfbndkifdkjnfldifdnfldufjodmfldhfdlfudhpfndloihfdnfldhifodnfon",
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
        <div className='flex flex-row relative h-[41rem] w-[89rem]'>
            <div className='absolute h-full w-full'>
                <img src={talleres[x].imagen} className='h-full w-full'></img>
            </div>
            <div className='flex flex-col place-content-between z-10 w-full'>
                <div className='flex flex-row place-content-between px-36 bg-slate-700 bg-opacity-50'>
                    <div className='pl-24 py-7  text-5xl'>
                        {talleres[x].nombre}
                    </div>
                    <div className='flex flex-col pr-5 py-7'>
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
                <div className='bg-slate-700 bg-opacity-50 px-36 py-7'>
                    {talleres[x].descripcion}
                </div>
            </div>
        </div>
}


const Talleres2 = () => {
    const [inset, setInset] = useState('');

    const slider = (direccion) => {


    };

    return (
        <div className="relative h-[41rem] w-[89rem] overflow-hidden">
            <div className={'absolute flex ' + inset} >
                {talleresElementos}
            </div>
        </div>
    );
}

export default Talleres2;
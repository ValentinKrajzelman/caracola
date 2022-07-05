import React, { useState, useEffect } from "react";
import axios from 'axios';

import ContactForm from "./contactForm";




const Taller = () => {

    useEffect(() => {
        axios.get('http://localhost:5000/talleres/')
            .then((res) => {
                let contenido = [];
                for (let x = 0; x < res.data.length; x++) {

                    contenido[x] =
                        <div>
                            <div>{res.data[x].titulo}</div>
                            <div>{res.data[x].descripcion}</div>
                            <div>{res.data[x].sede}</div>
                            <div>{res.data[x].imagenSeleccionada}</div>
                        </div>
                        ;
                }
                console.log(contenido);
                setCosas(contenido);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [1]);

    const [cosas, setCosas] = useState('');


    return (
        <div>
            <div>
                <div>Oferta de talleres</div>
                <div>{cosas}</div>
            </div>
            <ContactForm />
        </div>
    );
};

export default Taller;
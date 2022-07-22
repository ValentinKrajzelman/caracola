import React, { useRef } from 'react';
import emailjs from "@emailjs/browser"

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w6jbyuv', 'plantilla_pie', form.current, 'user_vrYQ6D08ThV9yaVwlbQYo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='mt-16'>
            <div>

                <form ref={form} onSubmit={sendEmail}>
                    <div className='flex flex-col gap-7 max-w-[40rem]'>
                        <div>Alguna consulta? Escribinos a nuestro mail: </div>
                        <input placeholder="Nombre" type="text" name="Name" />
                        <input placeholder="Email" type="email" name="user_email" />
                        <textarea placeholder="Mensaje" name="message"></textarea>
                        <input className='h-[10vh] text-[#0A192F] p-1' type="submit" value='send' />
                    </div>
                </form>
                <div>
                    <div>tambien podes comunicarte a nuestro whatsapp: </div>
                    <div>icono de wsp +540000000001</div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
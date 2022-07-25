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
        <div className=''>
            <form ref={form} onSubmit={sendEmail}>
                <div className='flex flex-row my-5'>
                    <div className='flex flex-col gap-1 max-w-[40rem]'>
                        <div>Alguna consulta? Escribinos a nuestro mail: </div>
                        <input placeholder="Nombre" type="text" name="Name" />
                        <input placeholder="Email" type="email" name="user_email" />
                        <input className='text-[#0A192F] p-1' type="submit" value='send' />
                    </div>
                    <textarea className='mx-5 min-w-[15rem] max-h-[7rem]' placeholder="Mensaje" name="message"></textarea>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
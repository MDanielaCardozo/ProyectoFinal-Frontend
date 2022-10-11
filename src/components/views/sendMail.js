import emailjs from '@emailjs/browser';

export const sendMail = (nombre, email)=>{
    const EMAILJS_SERVICE = process.env.REACT_APP_EMAILJS_SERVICE;
    const EMAILJS_TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE;
    const EMAILJS_PUBLICKEY = process.env.REACT_APP_EMAILJS_PUBLICKEY;

    var templateParams = {
        user_name: nombre,
        message: 'Su registro ha sido exitoso',
        destinatario: email,
        reply_to: 'restaurant.c2i@gmail.com'
    };
    console.log(templateParams);
    emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, templateParams, EMAILJS_PUBLICKEY)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}

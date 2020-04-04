const nodemailer = require('nodemailer');
const mailConfig = require('../configs/mail');

exports.sendMail = (req, res) => {
    let transporter = nodemailer.createTransport({
        host:
        port:
        secur:
        auth: {
            user:
            pass:
        }
    });

    transporter.sendMail({
        from:
        to:
        subject:
        text:
        html:
    })
    .then((data) => {
        res.json({ message: 'Mensaje enviado' });
    })
    .catch(error => {
        res.json({ message: 'Mensaje no enviado', error: error });
    })

    
}
var nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
async function loginmail(email,name) {
    let config = {
        service : 'gmail',
        auth : {
            user: "shahjinay02@gmail.com",
            pass: "hunceekqidhjnvlv"
        }
    }
    let transporter = nodemailer.createTransport(config);
    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Task Manager",
            link : 'https://mailgen.js/'
        }
    })
    let response = {
        body: {
            name : name,
            intro: "We noticed a new sign-in to your Task Manager Account. If this was you, you don't need to do anything. If not, we'll help you secure your account. ",
            outro: "Your Privacy is over Concern."
        }
    }
    let mail = MailGenerator.generate(response)
    let message = {
        from : "shahjinay02@gmail.com",
        to : email,
        subject: "Task Manager Application - Security Aleart",
        html: mail
    }
    transporter.sendMail(message).then(() => {
        return;
    }).catch(error => {
      console.log(error);
        return;
    })
}
module.exports = {loginmail};
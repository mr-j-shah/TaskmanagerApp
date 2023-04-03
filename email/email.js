var nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const {user,pass} = require("../mailaccount");
async function loginmail(email,name) {
    let config = {
        service : 'gmail',
        auth : {
            user: user,
            pass: pass
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
            outro: "Your Privacy is our Concern."
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
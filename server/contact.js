const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'artyprodsfax@gmail.com',
    pass: 'nwrndgeqlsqruaox',
  },
});

async function sendMail(name, email, message) {
  const mailOptions = {
    from: 'artyprodsfax@gmail.com',
    to: 'fahemmohamed64@gmail.com',
    subject: 'Nouveau message de contact',
    text: `
      Nom: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail envoyé :', info.response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = sendMail;

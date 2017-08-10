const router = require('express').Router();
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: process.env.GMAIL_SMTP_USER,
    pass: process.env.GMAIL_SMTP_PASSWORD
  }
});


router.post('/email', function(req, res, next) {
  // setup email data with unicode symbols
  const mailOptions = {
    from: process.env.GMAIL_SMTP_USER, // sender address
    to: process.env.GMAIL_SMTP_USER, // list of receivers
    subject: `Contact form - ${req.body.name}`, // Subject line
    text: `
      Name: ${req.body.name}\n
      Email: ${req.body.email}\n
      Message: ${req.body.message}`, // plain text body
    html: `<div style="width: 100%;">
      Name: ${req.body.name}</div>
      Email: <div>${req.body.email}</div>
      Message: <div>${req.body.message}</div>` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.status(200).send()
  });

});

router.use(function (req, res) {
  res.status(404).end();
});

module.exports = router;

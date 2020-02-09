exports.handler = function(event, context, callback) {
  const nodemailer = require("nodemailer");
  const { ZOHO_NAME, ZOHO_KEY } = process.env;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: ZOHO_NAME,
      pass: ZOHO_KEY
    }
  });

  const body = JSON.parse(event.body);
  transporter.sendMail(
    {
      from: `${body.name} <${ZOHO_NAME}>`, //`${body.name} <${body.email}>`, // sender address
      to: "alejandro@varona.io", // list of receivers
      subject: "Form Submission", // Subject line
      text: body.message, // plain text body
      html: `<b>${body.message}</b>` // html body
    },
    function(error, info) {
      if (error) {
        callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            error: error.message
          })
        });
      }

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Email processed succesfully!`
        })
      });
    }
  );
};

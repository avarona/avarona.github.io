import React from "react";
import Form from "../../components/Form";
import { Box, Heading } from "grommet";
import { NETLIFY_EMAIL } from "../../constants";

class Contact extends React.Component {
  sendEmail = e => {
    const { name, email, message } = e.currentTarget;
    e.preventDefault();

    fetch(NETLIFY_EMAIL, {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    });
  };

  render() {
    return (
      <Box align='center'>
        <Heading margin='48px 0'>Shoot me an email</Heading>
        <Form onSubmit={this.sendEmail} />
      </Box>
    );
  }
}

export default Contact;

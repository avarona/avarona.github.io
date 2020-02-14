import React from "react";
import Form from "../../components/Form";
import { Box } from "grommet";
import Heading from "../../components/Heading";
import { NETLIFY_EMAIL } from "../../constants";

class Contact extends React.Component {
  state = {
    loading: false
  };

  sendEmail = e => {
    const { name, email, message } = e.currentTarget;
    console.log("asdfasf", e.currentTarget);
    e.preventDefault();
    this.setState({ loading: true });

    fetch(NETLIFY_EMAIL, {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    }).then(res => {
      console.log("helllo");

      this.setState({ loading: false });
    });
  };

  render() {
    return (
      <Box align='center'>
        <Heading>Shoot me an email</Heading>
        <Form onSubmit={this.sendEmail} loading={this.state.loading} />
      </Box>
    );
  }
}

export default Contact;

import React from "react";
import Form from "../../components/Form";
import styles from "./styles.module.scss";
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
      <div className={styles.container}>
        <h1>Shoot me an email</h1>
        <Form onSubmit={this.sendEmail} />
      </div>
    );
  }
}

export default Contact;

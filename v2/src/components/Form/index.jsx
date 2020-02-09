import React from "react";
import styles from "./styles.module.scss";

const Contact = ({ onSubmit }) => {
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        name='contact-form'
        action='POST'
        data-netlify='true'
        onSubmit={onSubmit}
      >
        <label htmlFor='name'>Your Name:</label>
        <input type='text' name='name' />

        <label htmlFor='email'>Your Email:</label>
        <input type='email' name='email' />

        <label htmlFor='message'>Message:</label>
        <textarea name='message' />

        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Contact;

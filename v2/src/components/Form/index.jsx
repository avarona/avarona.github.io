import React from "react";
import { Form, FormField, Box, TextInput, TextArea, Button } from "grommet";
import { Spinning } from "grommet";

const Contact = ({ onSubmit, loading }) => {
  return (
    <Box width='500px'>
      <Form
        name='contact-form'
        data-netlify='true'
        onSubmit={onSubmit}
        gap='50px'
      >
        <FormField name='name' label='Name' component={TextInput} required />

        <FormField
          name='email'
          label='Email'
          type='email'
          component={TextInput}
          required
        />

        <FormField
          id='message'
          name='message'
          label='Message'
          resize={false}
          component={TextArea}
        />

        <Button type='submit' primary>
          {loading ? Spinning : "Submit"}
        </Button>
      </Form>
    </Box>
  );
};

export default Contact;

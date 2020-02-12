import React from "react";
import { Form, FormField, Box, TextInput, TextArea, Button } from "grommet";

const Contact = ({ onSubmit }) => {
  return (
    <Box width='50%'>
      <Form data-netlify onSubmit={onSubmit} validate='blur' gap='50px'>
        <FormField name='name' required>
          <TextInput placeholder='Name' />
        </FormField>

        <FormField name='email' required>
          <TextInput placeholder='Email' type='email' />
        </FormField>

        <FormField name='message' required>
          <TextArea placeholder='Message' resize={false} />
        </FormField>

        <Button type='submit' primary label='Submit' />
      </Form>
    </Box>
  );
};

export default Contact;

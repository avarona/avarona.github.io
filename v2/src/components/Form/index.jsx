import React from "react";
import { Form, FormField, Box, TextInput, TextArea, Button } from "grommet";
import Spinner from '../Spinner';

const Contact = ({ onSubmit, loading }) => {
  return (
    <Box width='500px'>
      <Form
        name='contact-form'
        data-netlify='true'
        onSubmit={onSubmit}
        gap='50px'
      >
        <FormField name='name' placeholder='Name' component={TextInput} required />

        <FormField
          name='email'
          placeholder='Email'
          type='email'
          component={TextInput}
          required
        />

        <FormField
          id='message'
          name='message'
          placeholder='Message'
          resize={false}
          component={TextArea}
        />

        <Button type='submit' primary size="large" gap="50px">
          SUBMIT
          {/* {loading ? 'Submit' : <Spinner />} */}
        </Button>
        {/* <Button type='submit' primary>
          {!loading ? 'Submit' : <Spinner />}
        </Button> */}
      </Form>
    </Box>
  );
};

export default Contact;

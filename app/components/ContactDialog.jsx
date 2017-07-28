import React from 'react';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const ContactDialog = (props) => {
  return (
    <Dialog
      title="Dialog With Actions"
      modal={false}
      open={props.dialogOpen}
      onRequestClose={props.handleClose}
      repositionOnUpdate={false}>
      <TextField hintText="John Doe" floatingLabelText="Name" />
      <TextField hintText="example@email.com" floatingLabelText="Email" />
      <TextField textareaStyle={true} multiLine={true} hintText="Nice profile, Alex!" floatingLabelText="Message" />
    </Dialog>
  )
}

export default ContactDialog;

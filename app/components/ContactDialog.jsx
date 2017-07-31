import React from 'react';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};

const actions = [
  <FlatButton label="Cancel" primary={true} />,
  <FlatButton label="Submit" primary={true} />
]

const ContactDialog = (props) => {
  return (
    <Dialog
      title="Send me a Message!"
      actions={actions}
      modal={false}
      open={props.dialogOpen}
      onRequestClose={props.handleClose}
      contentStyle={customContentStyle}>
      <TextField hintText="John Doe" fullWidth={true} floatingLabelText="Name" />
      <TextField hintText="example@email.com" fullWidth={true} floatingLabelText="Email" />
      <TextField multiLine={true} fullWidth={true} hintText="Nice profile, Alex!" floatingLabelText="Message" />
    </Dialog>
  )
}

export default ContactDialog;

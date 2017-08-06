import React, { Component } from 'react';
import axios from 'axios';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  textField: {
    // display: 'table',
    width: '100%',
    position: 'relative',
    margin: '0 0 0 auto'
  },
  circular: {
    position: 'relative',
    left: '0',
    right: '0',
    zIndex: '0'
  },
  inputForm: {
    width: '80%'
  }
}

class ContactDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      mailProgress: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleClose() {
    this.setState({
      name: '',
      email: '',
      message: '',
      mailProgress: false
    })
  }

  handleSubmit() {
    // if null dont send
    this.setState({mailProgress: true})
    axios.post('/api/email', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
    .then(res => {
      this.handleClose()
      console.log(res.data)
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div id="contact-input" className="center">
        <form>
          <div style={styles.inputForm}>
            {
              (!this.state.mailProgress)
              ? <CircularProgress style={styles.circular} />
              : null
            }
            <TextField
              style={styles.textField}
              hintText="John Doe"
              floatingLabelText="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <TextField
              style={styles.textField}
              hintText="example@email.com"
              floatingLabelText="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              style={styles.textField}
              multiLine={true}
              hintText="Nice profile, Alex!"
              floatingLabelText="Message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <FlatButton
              label="Cancel"
              primary={false}
              onTouchTap={this.handleClose}
            />
            <FlatButton
              label="Submit"
              primary={true}
              onTouchTap={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    )
  }
}


export default ContactDialog;

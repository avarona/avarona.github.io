import React, { Component } from 'react';
import axios from 'axios';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

const styles = {
  inputForm: {
    width: '80%'
  },
  textField: {
    width: '100%',
    position: 'relative',
    margin: '0 10%',
    zIndex: '0'
  },
  buttons: {
    float: 'right'
  },
  flatButton: {
    zIndex: '0'
  },
  circular: {
    zIndex: '1'
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
      mailProgress: false,
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // if null dont send
    this.setState({mailProgress: true})
    axios.post('/api/email', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
    .then(() => {
      this.handleClose()
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <Paper className="paper">
        <form onSubmit={this.handleSubmit}>
          <div style={styles.inputForm}>
            {
              (this.state.mailProgress)
              ? <div className="circularProgress">
                <CircularProgress style={styles.circular} />
              </div>
              : null
            }
            <TextField
              style={styles.textField}
              name="name"
              type="text"
              hintText="John Doe"
              floatingLabelText="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <TextField
              style={styles.textField}
              name="email"
              type="email"
              hintText="example@email.com"
              errorText={this.state.errorText}
              floatingLabelText="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              style={styles.textField}
              name="message"
              type="text"
              hintText="Nice profile, Alex!"
              floatingLabelText="Message"
              multiLine={true}
              rows={3}
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <div className="buttons">
            <FlatButton
              style={styles.flatButton}
              label="Cancel"
              primary={false}
              onTouchTap={this.handleClose}
            />
             <FlatButton
                style={styles.flatButton}
                label="Submit"
                type="submit"
                primary={true}
              />
          </div>
        </form>
      </Paper>
    )
  }
}


export default ContactDialog;

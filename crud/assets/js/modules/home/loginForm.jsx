import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  FormGroup,
  FormControl,
  Form
} from 'react-bootstrap';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      token: '',
    };
  }

  render() {
    return(
      <Form >
        <FormGroup >
          <FormControl.Feedback>
            <i className="mdi mdi-account"></i>
          </FormControl.Feedback>
          <FormControl type="text"
                       placeholder="Username"
                       name="username"
          />
        </FormGroup>
        <FormGroup >
          <FormControl.Feedback>
            <i className="mdi mdi-lock"></i>
          </FormControl.Feedback>
          <FormControl type="password"
                       placeholder="Password"
                       name="password"
          />
        </FormGroup>
        <Checkbox>Remember me</Checkbox>
        <Button type="submit" block className="login-btn">
          Login
        </Button>
      </Form>
    )
  }
}

export default LoginForm;

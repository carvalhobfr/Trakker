import React, { Component } from 'react';
import { signIn } from './../../services/authentication';
import { Link } from 'react-router-dom';
import './style.scss';

class SignInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const user = await signIn({
        email,
        password
      });
      this.props.updateUserInformation(user);
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <section className="page__sign-in">
        <h1>Trakker</h1>
        <h4>Sign in to your account</h4>
        <form className="form__sign-in" onSubmit={this.handleFormSubmission}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <button>Sign In</button>
        </form>

        <p className="or">or</p>

        <form action="/sign-up">
          <button className="sign-up">Sign Up</button>
        </form>
      </section>
    );
  }
}

export default SignInView;

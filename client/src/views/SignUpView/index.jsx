import React, { Component } from 'react';
import { signUp } from './../../services/authentication';
import './style.scss';
import { Link } from 'react-router-dom';


class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    event.preventDefault();
    const { name, email, password } = this.state;
    signUp({
      name,
      email,
      password
    })
      .then(user => {
        this.props.updateUserInformation(user);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <section className="page__sign-up">
        <Link to="/"><img src="/img01.png" alt="logo" style={{ width: "25vw", margin: "3vw", "max-width": "125px" }} /></Link>
        <form className="form__sign-up" onSubmit={this.handleFormSubmission}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
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
          <button disabled={this.state.password.length < 5}>Sign Up</button>
        </form>
      </section>
    );
  }
}

export default SignUpView;

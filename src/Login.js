import React from 'react';
import './App.css';
import { Button, FormGroup, FormControl, FormLabel, Alert } from "react-bootstrap";

class Login extends React.Component {
	constructor(props){
		super(props);
    this.state = {
      email: "",
      password: "",
			error: false
    };
		this.validateForm = this.validateForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState(
			Object.assign(
				{},
				this.state,
				{ [event.target.id]: event.target.value }
			)
		);
  }

  handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:4000/users')
			.then(res => res.json())
			.then(result => {
				result.forEach(element => {
					if (element.email == this.state.email && element.password == this.state.password){
						localStorage.setItem('authenticationToken', element.authentication_token);
						this.props.history.push({
							pathname: '/',
							state: { refresh: true }
						});
					}
				});				
				if ( localStorage.getItem('authenticationToken') === null ){
					this.setState({
						error: true
					})
				}
			})			
	}
	
  render() {
		if ( localStorage.getItem('authenticationToken') != null ){
			this.props.history.push('/');
		}

		let error;
		if(this.state.error){
			error = <Alert variant='danger'>Invalid E-Mail or Password. </Alert>;
		}

    return (
			<form onSubmit={this.handleSubmit}>
				<div className='row'>
					<div className='col-sm-4' />
					<div className='col-sm-4'>
						{error}
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-4' />
					<FormGroup controlId="email" className="col-sm-4" >
						<FormLabel>Email</FormLabel>
						<FormControl
							autoFocus
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</FormGroup>
				</div>
				<div className='row'>
					<div className='col-sm-4' />
					<FormGroup controlId="password" className="col-sm-4">
						<FormLabel>Password</FormLabel>
						<FormControl
							value={this.state.password}
							onChange={this.handleChange}
							type="password"
						/>
					</FormGroup>
				</div>
				<Button
					disabled={!this.validateForm()}
					type="submit"
				>
					Login
				</Button>
			</form>
    );
  }
}

export default Login;

import React from 'react';
import './App.css';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

class Logout extends React.Component {
	constructor(props){
		super(props);
		this.clearToken = this.clearToken.bind(this);
	}

	clearToken(event){
		event.preventDefault();
		localStorage.removeItem('authenticationToken');
		this.props.history.push('/login');
	}

	render(){
		if (localStorage.getItem('authenticationToken') != null){
		return (
			<React.Fragment>
				<Button onClick={this.clearToken}>Logout</Button>
			</React.Fragment>
		)}
		else{
			return(
				<React.Fragment />
			)
		}
	}
}

export default Logout;
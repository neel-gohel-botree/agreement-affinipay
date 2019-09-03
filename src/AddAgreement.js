import React, { Component } from 'react';
import { Form, Button  } from 'react-bootstrap';

class AddAgreement extends Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
    this.handleInput = this.handleInput.bind(this);
    this.createAgreement = this.createAgreement.bind(this);
    this.agreementsPage = this.agreementsPage.bind(this);
  }

  handleInput(e) {
    let newObj = Object.assign(
      {},
      this.state.data,
      { [e.target.id]: e.target.value }
    );
    this.setState({
      data: newObj
    });
  }

  createAgreement(e) {
    e.preventDefault();
    fetch("http://localhost:4000/agreements", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(this.state.data)
    })
    .then(response => this.agreementsPage());
  }

  agreementsPage() {
    this.props.history.push('/agreements')
  }


  render() {
    return (
      <React.Fragment>
        <h4>
          Add Agreement
        </h4>
        <Form onSubmit={this.createAgreement}>
          <div className='row'>
            <div className='col-sm-4' />
            <Form.Group className='col-sm-4' controlId="first_name">
              <Form.Label className='control-label'>First Name</Form.Label>
              <div>
                <Form.Control type="text" onChange={this.handleInput} />
              </div>
            </Form.Group>
          </div>
          
          <div className='row'>
            <div className='col-sm-4' />
            <Form.Group className='col-sm-4' controlId="last_name">
              <Form.Label className='control-label'>Last Name</Form.Label>
              <div>
                <Form.Control type="text" onChange={this.handleInput} />
              </div>
            </Form.Group>
          </div>
          
          <div className='row'>
            <div className='col-sm-4' />
            <Form.Group className='col-sm-4' controlId="status">
              <Form.Label className='control-label'>Status</Form.Label>
              <div>
                <Form.Control type="text" onChange={this.handleInput} />
              </div>
            </Form.Group>
          </div>
          
          <div className='row'>
            <div className='col-sm-4' />
            <Form.Group className='col-sm-4' controlId="date_created">
              <Form.Label className='control-label'>Date Created</Form.Label>
              <div>
                <Form.Control type="text" onChange={this.handleInput} />
              </div>
            </Form.Group>
          </div>
          
          <div className='row'>
            <div className='col-sm-4' />
            <Form.Group className='col-sm-4' controlId="days_out">
              <Form.Label className='control-label'>Days out</Form.Label>
              <div>
                <Form.Control type="text" onChange={this.handleInput} />
              </div>
            </Form.Group>
          </div>
          
          <div className='row'>
            <div className='col-sm-4' />
            <Form.Group className='col-sm-4' controlId="date_accepted">
              <Form.Label className='control-label'>Date Accepted</Form.Label>
              <div>
                <Form.Control type="text" onChange={this.handleInput} />
              </div>
            </Form.Group>
          </div>
          
          <Form.Group controlId="formSubmitButton">        
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </React.Fragment>
    )
  }
}

export default AddAgreement
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import Agreement from './Agreement'
import { withRouter } from 'react-router-dom'

class Agreements extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agreements: []
    }
    this.AddAgreementPage = this.AddAgreementPage.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4000/agreements')
      .then(response => response.json())
      .then(result => { 
        this.setState({ agreements: result })
      })
  }

  render() {
    return(
      <React.Fragment>
        <div>
          <h5>
            Agreements
            <button className='btn btn-primary float-right' onClick={this.AddAgreementPage}>
              Add Agreement
            </button>
          </h5>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Status</th>
              <th>Date Created</th>
              <th>Days out</th>
              <th>Date Accepted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.agreements.map(function(agreement){
              return <Agreement {...agreement} />;
            })}
          </tbody>
        </Table>
      </React.Fragment>
    )
  }

  AddAgreementPage() {
    let path = "/agreements/new";
    this.props.history.push(path)
  }
}

export default withRouter(Agreements)
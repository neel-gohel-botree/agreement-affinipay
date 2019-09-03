import React, { Component } from 'react';

class Agreement extends Component {
  constructor(props) {
    super(props)
    this.deleteAgreement = this.deleteAgreement.bind(this);
    this.agreementsPage = this.agreementsPage.bind(this);
  }

  render() {
    return(
      <React.Fragment>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.first_name}</td>
          <td>{this.props.last_name}</td>
          <td>{this.props.status}</td>
          <td>{this.props.date_created}</td>
          <td>{this.props.days_out}</td>
          <td>{this.props.date_accepted}</td>
          <td>
            <button onClick={this.deleteAgreement}>Delete</button>
          </td>
        </tr>
      </React.Fragment>
    )
  }

  deleteAgreement(e) {
    e.preventDefault();
    fetch("http://localhost:4000/agreements/" + this.props.id, {
      method: "delete"
    })
    .then(response => this.agreementsPage());
  }

  agreementsPage() {
    this.props.history.push('/agreements')
  }
}

export default Agreement
import React, {Component} from 'react';
import FormContact from './FormContact';


class ContactLayout extends Component {
  state = {
    modalActive: false,
    modalEditActive: false
  }
  
  toggleModal = () => {
    this.state.modalActive ? this.setState({modalActive: false}) : this.setState({modalActive: true})
  }

  toggleEditModal = () => {
    this.state.modalEditActive ? this.setState({modalEditActive: false}) : this.setState({modalEditActive: true})
  }

  render() {
    return (
      <li>
        {this.props.contact.prenom} <b>{this.props.contact.nom}</b>
        <i onClick={() => this.toggleModal()} className="btn btn-primary icon icon-plus"></i> 
        <i onClick={() => this.toggleEditModal()} className="btn icon icon-edit"></i>
        <a href={`http://localhost:3001/listeContact/${this.props.contact._id}/delete`}><i className="btn btn-primary icon icon-delete"></i></a>
      
        {this.state.modalActive &&
          <div className="modal active">
            <div className="modal-overlay"></div>
            <div className="modal-container">
              <div className="modal-header">
                <button onClick={() => this.toggleModal()} className="btn btn-clear float-right"></button>
                <div className="modal-title h5">
                  {this.props.contact.prenom} <b>{this.props.contact.nom}</b>
                </div>
              </div>
              <div className="modal-body">
                <div className="content">
                  <p>Titre: {this.props.contact.titre}</p>
                  <p>Entreprise: {this.props.contact.entreprise}</p>
                  <p>Email: {this.props.contact.email}</p>
                  <p>Adresse: {this.props.contact.adresse}</p>
                  <p>Mobile : 0{this.props.contact.telephone.mobile}</p>
                  <p>Bureau : 0{this.props.contact.telephone.work}</p>
                </div>
              </div>
            </div>
          </div>
        }

        {this.state.modalEditActive &&
          <div className="modal active">
            <div className="modal-overlay"></div>
            <div className="modal-container">
              <div className="modal-header">
                <button onClick={() => this.toggleEditModal()} className="btn btn-clear float-right"></button>
                <div className="modal-title h5">Edit contact</div>
              </div>
              <div className="modal-body">
                <div className="content">
                  <form action={`http://localhost:3001/listeContact/${this.props.contact._id}/edit`} method="post">
                    <FormContact contact={this.props.contact}/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        }
      </li>
    )
  }
}

export default ContactLayout;
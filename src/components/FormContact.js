import React, { Component } from 'react';

class FormContact extends Component {
  render() {
    let defaultData = {
      prenom: '',
      nom: '',
      titre: '',
      entreprise: '',
      email: '',
      adresse: '',
      mobile: '',
      bureau: '',
      submit: 'Add contact'
    }
    if (this.props.contact) {
      defaultData = {
        prenom: this.props.contact.prenom,
        nom: this.props.contact.nom,
        titre: this.props.contact.titre,
        entreprise: this.props.contact.entreprise,
        email: this.props.contact.email,
        adresse: this.props.contact.adresse,
        mobile: this.props.contact.mobile,
        bureau: this.props.contact.bureau,
        submit: 'Confirm changes'
      }
    }

    return (
      <div>
        <label className="form-label" htmlFor="prenom">prenom</label>
        <input className="form-input" type="text" id="prenom" name="prenom" 
          defaultValue={defaultData.prenom}/>

        <label className="form-label" htmlFor="nom">nom</label>
        <input className="form-input" type="text" id="nom" name="nom" 
          defaultValue={defaultData.nom}/>

        <label className="form-label" htmlFor="titre">titre</label>
        <input className="form-input" type="text" id="titre" name="titre" 
          defaultValue={defaultData.titre}/>
        
        <label className="form-label" htmlFor="entreprise">entreprise</label>
        <input className="form-input" type="text" id="entreprise" name="entreprise" 
          defaultValue={defaultData.entreprise}/>

        <label className="form-label" htmlFor="email">email</label>
        <input className="form-input" type="text" id="email" name="email" 
          defaultValue={defaultData.email}/>

        <label className="form-label" htmlFor="adresse">adresse</label>
        <input className="form-input" type="text" id="adresse" name="adresse" 
          defaultValue={defaultData.adresse}/>

        <label className="form-label" htmlFor="mobile">mobile</label>
        <input className="form-input" type="text" id="mobile" name="mobile" 
          defaultValue={defaultData.mobile}/>

        <label className="form-label" htmlFor="work">bureau</label>
        <input className="form-input" type="text" id="work" name="work" 
          defaultValue={defaultData.work}/>

        <button action="submit" className="btn btn-primary">{defaultData.submit}</button>
      </div>
    )
  }
}

export default FormContact;
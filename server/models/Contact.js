const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  nom: { type: String, require: true },
  prenom: { type: String, require: true },
  titre: String,
  entreprise: String,
  email: String,
  adresse: String,
  telephone: {
    mobile: Number,
    work:  Number
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

const groupNumbers = (req, res, next) => {
  const workNum = req.body.work;
  const mobileNum = req.body.mobile;
  req.body.telephone = {
    work: workNum,
    mobile: mobileNum
  }
  next();  
}


router.post('/new', 
  express.urlencoded({extended: true}), 
  groupNumbers, 
  (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save(err => err ? res.send(err) : res.json({"msg" : "contact added"}));
})

router.get('/', (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) return res.send(err);
    res.json(contacts);
  })
})

router.get('/:id/delete', (req, res) => {
  Contact.findByIdAndRemove(req.params.id, err => err ? res.send(err) : res.json({"msg": "contact deleted"}));
})

router.post('/:id/edit', 
  express.urlencoded({extended: true}), 
  groupNumbers, 
  (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, err => err ? res.send(err) : res.json({"msg": "contact updated"}));  
})

module.exports = router;
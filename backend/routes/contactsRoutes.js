const express = require('express')
const router = express.Router()
const {
  getAllContacts,
  addContact,
  updateContact,
  deleteContact
} = require('../controllers/contactsController')

router.get('/', getAllContacts)

router.post('/', addContact)

router.patch('/:id', updateContact)

router.delete('/:id', deleteContact)

module.exports = router
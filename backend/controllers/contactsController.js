const getAllContacts = (req, res) => {
  res.json({
    message: 'Get all contacts'
  })
}

const addContact = (req, res) => {
  res.json({
    message: 'Add a contact'
  })
}

const updateContact = (req, res) => {
  res.json({
    message: `Updated contact with id ${req.params.id}`
  })
}

const deleteContact = (req, res) => {
  res.json({
    message: `Deleted contact with id ${req.params.id}`
  })
}

module.exports = {
  getAllContacts,
  addContact,
  updateContact,
  deleteContact
}
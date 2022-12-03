const axios = require('axios').default;

const getAllContacts = async (req, res) => {
  const { data } = await axios.get('http://localhost:3000/contacts')
  res.json(data)
}

const addContact = async (req, res) => {
  const { first_name, last_name, phone, email } = req.body
  if(!first_name || !last_name || !phone || !email){
    return res.status(400).json({
      message: 'All fields are required!'
    })
  }
  const { data } = await axios.post('http://localhost:3000/contacts', {
    first_name: first_name,
    last_name: last_name,
    phone: phone,
    email: email
  }).catch(error => {
    res.status(503).json({
      message: error
    })
  })
  res.status(201).json(data)
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
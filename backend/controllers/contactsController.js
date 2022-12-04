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

const updateContact = async (req, res) => {
  const id = req.params.id
  const updatedContact = req.body
  try {
    const { data } = await axios.patch(`http://localhost:3000/contacts/${id}`, updatedContact).catch(error => {
      res.status(503).json({
        message: error
      })
    })
    res.status(201).json(data)
  } catch (error) {
    res.status(402).json({
      message: 'Invalid id sent'
    })
  }
}

const deleteContact = async (req, res) => {
  const id = req.params.id
  try {
    const { data } = await axios.delete(`http://localhost:3000/contacts/${id}`).catch(error => {
      res.status(503).json({
        message: error
      })
    })
    res.status(200).json(data)
  } catch (error) {
    res.status(402).json({
      message: 'Invalid id sent'
    })
  }
}

module.exports = {
  getAllContacts,
  addContact,
  updateContact,
  deleteContact
}
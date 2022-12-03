const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Get all contacts'
  })
})

router.post('/', (req, res) => {
  res.json({
    message: 'Add a contact'
  })
})

router.put('/:id', (req, res) => {
  res.json({
    message: `Updated contact with id ${req.params.id}`
  })
})

router.delete('/:id', (req, res) => {
  res.json({
    message: `Deleted contact with id ${req.params.id}`
  })
})

module.exports = router
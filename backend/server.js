const express = require('express')
const router = require('./routes/contactsRoutes')
const app = express()


app.use('/contacts', router)

app.listen(3000, () => {
  console.log('Server is running')
})


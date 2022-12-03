const express = require('express')
const router = require('./routes/contactsRoutes')
const app = express()


app.use(express.json())

app.use('/contacts', router)

app.listen(5000, () => {
  console.log('Server is running')
})


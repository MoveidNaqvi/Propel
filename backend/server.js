const express = require('express')
const router = require('./routes/contactsRoutes')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/contacts', router)

app.listen(5000, () => {
  console.log('Server is running')
})


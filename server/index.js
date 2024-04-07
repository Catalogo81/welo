const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const mongoose = require('mongoose')

require('dotenv/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//connect the db
const dbOptions = {useNewUrlParser:true, 
useUnifiedTopology:true}
mongoose.connect(process.env.DB_CONNECTION_URI) //mongo db connection
.then(() => console.log('DB Connected!'))
.catch(err => console.log(err)) 

const corsOpt = {
    origin: '*',
    credentials: true,
    optionSuccessSatus: 200
}

app.use(cors(corsOpt))
app.use('/', router)

const port = process.env.PORT || 8080 //8080
const server = app.listen(port, () => {
    console.log('Server is running on port ', port)
})
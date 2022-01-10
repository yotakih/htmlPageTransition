const express = require('express')
const app = express()
const path = require('path')
var router = express.Router()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

app.use('/nodejs', require('./router/nodejs'))
app.use('/', require('./router/html'))
app.use((req, res) => {
	res.sendStatus(404)
})

app.listen(3000, () => {
	console.log('Running at Port 3000...')
})
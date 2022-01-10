var router = require('express').Router()

router.post('/', function (req, res) {
	console.log('post body')
	console.log(req.body)
	// res.send('submit res')
	// res.sendStatus(500)
	res.redirect(req.baseUrl + '/result')
})

router.get('/init', (req, res) => {
	console.log('init')
	res.json(
		{
			'#input1': '<input id="test_id" name="test" type="text" value="123456" />',
		},
	)
})

router.get('/result', function (req, res) {
	setTimeout(() => {
		res.json({
			'#err_input1': 'message!!',
			'#err_input2': 'non disp message',
		})
	}, 3000)
})

router.post('/testpost', function (req, res) {
	// res.send('<h1>test post page</h1>')
	res.redirect('/frame2.html')
})

module.exports = router;
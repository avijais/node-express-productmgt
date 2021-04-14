var express = require('express')
	app = express(),
	port = process.env.PORT || 3000;

app.listen(port);

app.get("/", async (req, res) => {
	try {
		res.send({
			"message" : "running project"
		})
	} catch(error) {
		res.status(500)
	}
})

console.log('Api server started on : ', port);
var express = require('express')
	app = express(),
	port = process.env.PORT || 3000;

console.log("process.env")
// console.log(process.env)

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

// -----------------start------------------------------------------------------------------
// import express from 'express';
// import 'babel-polyfill';
// import cors from 'cors';
// import env from './env';
// console.log("from server js env : ", env)

// const app = express();

// // Add middleware for parsing URL encoded bodies (which are usually sent by browser)
// app.use(cors());
// // Add middleware for parsing JSON and urlencoded data and populating `req.body`
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.listen(env.port).on('listening', () => {
//   	console.log(`🚀 are live on ${env.port}`);
// });

// export default app;
// -----------------end------------------------------------------------------------------
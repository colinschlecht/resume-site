const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const cors = require('micro-cors')()
const handler = (req, res) => send(res, 200, 'ok!')
 
module.exports = cors(handler)

app.listen(port, () => {
	console.log("We are live on port 4444");
});

app.get("/", (req, res) => {
	res.send("Welcome to my api");
});

app.post("/api/email", (req, res) => {
	const data = req.body;

	const smtpTransport = nodeMailer.createTransport({
		service: "Gmail",
		port: 465,
		auth: {
			user: "schlechtcolin1@gmail.com",
			pass: PASSWORD,
		},
	});
	const mailOptions = {
		from: data.email,
		to: "schlechtcolin1@gmail.com",
		subject: "Email from personal site",
		html: `<p>Name: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <p>Message: ${data.message}</p>`,
	};

	smtpTransport.sendMail(mailOptions, (error, response) => {
		if (error) {
			res.send(error);
		} else {
			res.send("Success");
		}
		smtpTransport.close();
	});
});

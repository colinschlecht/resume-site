import nodemailer from "nodemailer";

export default function sendEmail(req, res) {
	const data = req.body;

	const smtpTransport = nodemailer.createTransport({
		host: "smtp.sendgrid.net",
		port: 465,
		auth: {
			user: "apikey",
			pass: process.env.API_KEY,
		},
	});
	const mailOptions = {
		from: "*@colinschlecht.info",
		to: "schlechtcolin1@gmail.com",
		subject: "Email from personal site",
		html: `<p>Name: ${data.name}</p>
                  <p>Email: ${data.email}</p>
                  <p>Message: ${data.message}</p>`,
	};

	return smtpTransport.sendMail(mailOptions, (error, response) => {
		if (error) {
			console.log(error);
			res.send(error);
		} else {
			console.log(response);
			res.send("Success");
		}
		smtpTransport.close();
	});
}

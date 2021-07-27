import nodemailer from "nodemailer";

export default function sendEmail(req, res) {
	const data = req.body;

	const smtpTransport = nodemailer.createTransport({
		host: "smtp.sendgrid.net",
		port: 587,
		auth: {
			user: apikey,
			pass: process.env.API_KEY,
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

	return smtpTransport.sendMail(mailOptions, (error, response) => {
		if (error) {
			res.send(error);
		} else {
			res.send("Success");
		}
		smtpTransport.close();
	});
}

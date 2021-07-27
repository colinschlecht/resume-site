import nodemailer from "nodemailer";

export default function sendEmail(req, res) {
	const data = req.body;

	const smtpTransport = nodemailer.createTransport({
		host: "smtp.mailtrap.io",
		service: "Gmail",
		port: 465,
		auth: {
			user: "schlechtcolin1@gmail.com",
			pass: process.env.PASSWORD,
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

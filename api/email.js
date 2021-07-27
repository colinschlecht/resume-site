import nodemailer from "nodemailer";
// const cors = require("micro-cors")();
// const handler = (req, res) => send(res, 200, "ok!");
// module.exports = cors(handler);

export default function sendEmail(req, res) {
	const data = req.body;

	const smtpTransport = nodemailer.createTransport({
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
      console.log(error)
			res.send(error);
		} else {
      console.log("success")
			res.send("Success");
		}
		smtpTransport.close();
	});
}

// export default function post(req, res) {
// 	const data = req.body;

// 	const smtpTransport = nodemailer.createTransport({
// 		host: "smtp.mailtrap.io",
// 		port: 2525,
// 		auth: {
// 			user: "edce0adb730a18",
// 			pass: "7446d2dc264881",
// 		},
// 	});
// 	const mailOptions = {
// 		from: data.email,
// 		to: "schlechtcolin1@gmail.com",
// 		subject: "Email from personal site",
// 		html: `<p>Name: ${data.name}</p>
//                   <p>Email: ${data.email}</p>
//                   <p>Message: ${data.message}</p>`,
// 	};

// 	smtpTransport.sendMail(mailOptions, (error, response) => {
// 		if (error) {
// 			res.send(error);
// 		} else {
// 			res.send("Success");
// 		}
// 		smtpTransport.close();
// 	});
// }

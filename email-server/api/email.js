
  export default function hello(req, res) {
    res.statusCode = 200;
    res.json({ message: 'It works' });
  }

// app.post("/email", (req, res) => {
// 	const data = req.body;

// 	const smtpTransport = nodeMailer.createTransport({
// 		service: "Gmail",
// 		port: 465,
// 		auth: {
// 			user: "schlechtcolin1@gmail.com",
// 			pass: PASSWORD,
// 		},
// 	});
// 	const mailOptions = {
// 		from: data.email,
// 		to: "schlechtcolin1@gmail.com",
// 		subject: "Email from personal site",
// 		html: `<p>Name: ${data.name}</p>
//                 <p>Email: ${data.email}</p>
//                 <p>Message: ${data.message}</p>`,
// 	};

// 	smtpTransport.sendMail(mailOptions, (error, response) => {
// 		if (error) {
// 			res.send(error);
// 		} else {
// 			res.send("Success");
// 		}
// 		smtpTransport.close();
// 	});
// });
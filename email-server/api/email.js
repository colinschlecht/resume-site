const nodeMailer = require("nodemailer");

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
  const d = new Date()
  res.end(d.toString())
}

module.exports = allowCors(handler)

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
const userModel = require('../models/user');
const nodemailer = require("nodemailer");
const senddata = require('../util/sendmailer')
const jwt = require('jsonwebtoken')
exports.show = async (req, res) => {
   const user = await userModel.find();
   res.send(user)
}
exports.create = async (req, res) => {
   // var files = req?.files['profile2'];
   // var images = [];
   // files.forEach(img => {
   //    images.push(img.filename)
   // });
   const user = await new userModel({
      firstname: req.body.firstname,
      email: req.body.email,
      password: req.body.password
      // profile1: req?.files['profile1'][0].filename,
      // profile2: images// req.file.filename
   })
   user.save();

   let token;
   token = jwt.sign(
      {
         id: user._id,
         email: user.email
      }, "secretKey", { expiresIn: '1h' })

   console.log(token);
   if (token) {
      res.json({ success: true, token: token, message: "signup successfully!" })
   }
}

exports.update = async (req, res) => {
   // const id = req.query.id;
   const id = req.params.id;
   const user = await userModel.findById(id);
   if (user) {
      await userModel.findByIdAndUpdate({ _id: id },
         { firstname: req.body.firstname, email: req.body.email })
         .then(() => {
            res.json({ msg: "update" })
         })
   } else {
      res.json({ error: "user not found" })
   }

}

exports.trash = async (req, res) => {
   const id = req.params.id;
   const user = await userModel.findById(id);
   if (user) {
      await userModel.findByIdAndDelete(id)
         .then(() => { res.json({ msg: "delete" }) })
         .catch(() => { res.json({ error: error }) })
   } else {
      res.json({ error: "user not found" })
   }
}

exports.sendemail = async (req, res) => {
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         // TODO: replace `user` and `pass` values from <https://forwardemail.net>
         user: "rwa3.jyoti.sj@gmail.com",
         pass: "wwxc hcxq rpbl mhof",
      },
   });
   await transporter.sendMail(
      {
         from: 'rwa3.jyoti.sj@gmail.com', // sender address
         to: req.body.email, // list of receivers
         subject: "nodemailer testing", // Subject line
         // text: "Hello world text", // plain text body
         html: senddata("web development", "testing email"), // html body
      }, (err, info) => {
         if (err) {
            res.json({ "error": err })
         } else {
            res.json({ "msg": "send mail" })
         }
      });
}

exports.login = async (req, res) => {
   const { email, password } = req.body;
   const user = await userModel.findOne({ email: email });
   if (user) {
      if (user.password === password) {
         let token;
         token = jwt.sign(
            {
               id: user._id,
               email: user.email
            }, "secretKey", { expiresIn: '1h' })
         if (token) {
            res.json({ success: true, token: token, message: "login successfully!" })
         }
      } else {
         res.json({ error: "password not match" })
      }
   } else {
      res.json({ error: "user not found" })
   }
}

exports.getAccess = async (req, res) => {
   const token = req.headers.authorization.split(' ')[1];
   const verifyToken = jwt.verify(token, 'secretKey')
   if (verifyToken) {
      res.json({ success: true })
   } else {
      res.json({ error: "enter token" })
   }
}
const express = require("express");
const employeeRouter = require("./Router/EmpRouter");
const ProductRouter = require("./Router/ProductRouter");
const connectDatabase = require("./Database/db");
const cookie = require("cookie-parser");
const session=require("express-session")
const flash=require("connect-flash")
const app = express();
app.use(express.json());
app.use(cookie());
app.use(flash())
app.use(session({secret:"private key"}))
app.use(express.urlencoded({ extended: true }));
app.use("/", employeeRouter);
app.use("/product", ProductRouter);

app.set("view engine", "ejs");
app.set("views", __dirname + "/view");
app.use(express.static(__dirname + "/Public"));

connectDatabase().then(() => {
  app.listen(7890, () => {
    console.log("server listening");
  });
});

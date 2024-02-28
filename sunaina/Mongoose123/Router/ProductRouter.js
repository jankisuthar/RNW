const { Router } = require("express");
const {
  data,
  create,
  deleteData,
  updateData,
  productPage,
  ProductPage,
} = require("../Controller/ProductController");

const P_router = Router();
P_router.get("/products", data);
P_router.post("/create", create);
P_router.delete("/delete/:id", deleteData);
P_router.patch("/update/:id", updateData);
P_router.get("/",ProductPage)


module.exports = P_router;

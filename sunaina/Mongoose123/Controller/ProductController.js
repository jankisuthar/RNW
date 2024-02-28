const { Product } = require("../Database/Productmodel");

const data = async (req, res) => {
  let P_data = await Product.find();
  res.send(P_data);
  
};

const create = async (req, res) => {
  let data = await Product.create(req.body);
  req.flash("info","Insert");
  res.redirect('/');
  //res.send(data);

};

const deleteData = async (req, res) => {
  let data = await Product.findByIdAndDelete(req.params.id);
  res.json({ delete: true, data });
};

const updateData = async (req, res) => {
  let updated = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.send(updated);
};

const ProductPage=(req,res)=>{

  res.render("Product",{info:req.flash("info")})
}

module.exports = {
  data,
  create,
  deleteData,
  updateData,
  ProductPage

};

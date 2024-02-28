const productModel = require("../models/productModel");

exports.create = async (req, res) => {
    const { user_id, product_name } = req.body;
    const product = new productModel({
        user_id, product_name
    })

    await product.save()
        .then(() => {
            res.json({ message: "data has been inserted" })
        })
        .catch((err) => {
            res.json({ error: err })
        })
}

exports.index = async (req, res) => {
    const productName = req.query.productName;
    const product = await productModel.find({ product_name: productName }, { __v: 0 }).populate('user_id').exec();
    res.json({ product: product })
}


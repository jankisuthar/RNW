const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product_name: String
})

module.exports = model('Product', productSchema)
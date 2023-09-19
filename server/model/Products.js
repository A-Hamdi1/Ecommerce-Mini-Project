const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        default: 1
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isModifiable: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true })
module.exports = mongoose.model('products', ProductSchema);

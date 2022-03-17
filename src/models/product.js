import mongoose, { Schema } from "mongoose";

const Product = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required:true
    },
    desc: {
        type: String,
        minlength: 10
    }
}, { timestamps : true})

export default mongoose.model("Product", Product);
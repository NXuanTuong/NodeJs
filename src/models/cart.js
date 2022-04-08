import mongoose, {Schema} from "mongoose";
const { ObjectId } = mongoose.Types;

const cartSchema = new Schema({
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    cartItems: [
        {
            product: {
                type: ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
})

export default mongoose.model("Cart", cartSchema)
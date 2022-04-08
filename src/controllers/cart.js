import mongoose from "mongoose";
import Cart from "../models/cart";
import Product from "../models/product";
export const list = async (req, res) => {
    try {
        const cart = await Cart.findOne({user: req.params.user_id}).populate({
            path: 'cartItems',
            populate: { path: 'product'}
        })
        res.json(cart.cartItems)
    } catch (error) {
        console.log(error);
    }
}

export const addCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({user: req.params.user_id})
        if (cart) {
            console.log(true);
        }
    } catch (error) {
        console.log(error);
    }
}
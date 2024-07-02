import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    interest:{
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    photo: {
        type: Array,
        required: true
    },
   
    status: {
        type: String,
        required: true
    }
    

});

const Product = model("Product", ProductSchema);

export default Product;
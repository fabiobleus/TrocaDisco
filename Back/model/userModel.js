import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true  
    },
    phone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
        cpf: {
        type: String,
        required: false
    },
    birthdate: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    
    complement: {
        type: String,
        required: false
    },
    cep: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: false
    }       

});

const User = model("User", UserSchema);

export default User;
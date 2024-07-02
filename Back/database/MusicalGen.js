import { Schema, model } from "mongoose";

const MusicalGenSchema = new Schema({
   
    type: {
        type: String,
        required: true
    },
    
});

const User = model("MusicalGen", MusicalGenSchema);

export default MusicalGen;
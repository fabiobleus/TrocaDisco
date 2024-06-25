import { Schema, model } from "mongoose";

const MediaTypeSchema = new Schema({
   
    type: {
        type: String,
        required: true
    },
    
});

const User = model("MediaType", MediaTypeSchema);

export default MediaType;
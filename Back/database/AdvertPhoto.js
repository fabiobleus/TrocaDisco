import { Schema, model } from "mongoose";

const AdvertPhotoSchema = new Schema({
   idAdvert: {
       type: Schema.ObjectId,
       required: true   
   },
   fileName: {
       type: String,
       required: true
   }
});

const AdvertPhoto = model("AdvertPhoto", AdvertPhotoSchema);

export default AdvertPhoto;
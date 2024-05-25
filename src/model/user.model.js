import mongoose from "mongoose";




import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    name: { type: String, required: true },
    address: {
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
        complete_address: { type: String, required: false },
    },
    user_type:{ type: String, required: true } ,
    email : {type: String, required: true},
    phone : {tppe:String,  required: true}
});


const UserModel = mongoose.model('user', blogSchema)
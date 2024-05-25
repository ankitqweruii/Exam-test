import mongoose from "mongoose";
import { BaseSchema } from "../core/schema/base.schema.js";
import { addDefaultQueryConditions } from "../core/common/query.condition.js";
const { Schema } = mongoose;
mongoose.plugin(addDefaultQueryConditions);

const userSchema = new Schema({
  ...BaseSchema.obj,
  phone:{type:String, required:true} ,
  password:{type:String , required:true},
  name: { type: String, required: true },
  address: {
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    complete_address: { type: String },
  },
  user_type: { type: String, required: true },
  email: { type: String, requiredPaths: true },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;

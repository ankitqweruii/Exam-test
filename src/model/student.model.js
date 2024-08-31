import mongoose from "mongoose";
import { BaseSchema } from "../core/schema/base.schema.js";

const { Schema } = mongoose;

const studentSchema = new Schema({
  ...BaseSchema.obj,
  name: { type: String, required: true },
  email: { type: String, required: true },
  batch: { type: String, required: true },
  year: { type: String, required: true },
 phone:{ type: String, required: true},
 gender:{type:String,required:true}
});

const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel;

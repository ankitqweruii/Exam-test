import mongoose from "mongoose";
import { BaseSchema } from "../core/schema/base.schema.js";
import { addDefaultQueryConditions } from "../core/common/query.condition.js";
const { Schema } = mongoose;
mongoose.plugin(addDefaultQueryConditions);

const questionSchema = new Schema({
  ...BaseSchema.obj,
  title: { type: String, required: true },
  option_a: { type: String, required: true },
  option_b: { type: String, required: true },
  option_c: { type: String, required: true },
  option_d: { type: String, required: true },
  answer: { type: String, required: true }, // A , B , C , D
  subject: { type: String },
});

const QuestionModel = mongoose.model("question", questionSchema);

export default QuestionModel;

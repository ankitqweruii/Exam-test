import mongoose from "mongoose";
import { BaseSchema } from "../core/schema/base.schema.js";
import { addDefaultQueryConditions } from "../core/common/query.condition.js";
const { Schema } = mongoose;
mongoose.plugin(addDefaultQueryConditions);

const questionTestSchema = new Schema({
  ...BaseSchema.obj,
  question_id: { type: mongoose.Schema.ObjectId, required: true },
  test_id: { type: mongoose.Schema.ObjectId, required: true },
});

const QuestionTestModel = mongoose.model("question_test", questionTestSchema);

export default QuestionTestModel;

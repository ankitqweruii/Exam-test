import mongoose from "mongoose";
import { BaseSchema } from "../core/schema/base.schema.js";
import { addDefaultQueryConditions } from "../core/common/query.condition.js";
const { Schema } = mongoose;
mongoose.plugin(addDefaultQueryConditions);

const testSchema = new Schema({
  ...BaseSchema.obj,
  title: { type: String, required: true },
  status: { type: String, required: true },
  max_marks: { type: Number, required: true },
  max_time: { type: Number, required: true },
  is_nagative_marking: { type: Boolean, required: true },
  is_scheduled: { type: Boolean, required: true },
  date_time: { type: String },
  buffer_time: { type: Number, default: 0 },
});

const TestModel = mongoose.model("test", testSchema);

export default TestModel;

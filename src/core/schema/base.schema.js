import { model, Schema } from "mongoose";

export const BaseSchema = new Schema({
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
  deleted_at: { type: Date, default: null },
  created_by: { type: Schema.ObjectId, default: null },
  updated_by: { type: Schema.ObjectId, default: null },
  deleted_by: { type: Schema.ObjectId, default: null },
  active: { type: Boolean, default: true },
});

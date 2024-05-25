import { model, Schema } from 'mongoose';

const ParentSchema = new Schema({
  created_at : {type:Date, default : new Date()},
  updated_at : {type:Date, default : new Date()},
});

import Joi from "joi";
export const testSchema = Joi.object({
  title: Joi.string().min(3).required(),
  status: Joi.string().min(1).required(),
  max_marks: Joi.number().min(1).required(),
  max_time: Joi.number().required(),
  is_nagative_marking: Joi.boolean().required(),
  is_scheduled: Joi.boolean().required(),
  date_time: Joi.date().required(),
  created_by : Joi.string().required(),
  buffer_time: Joi.number(),
});

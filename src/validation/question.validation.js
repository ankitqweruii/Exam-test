import Joi from "joi";
export const questionSchema = Joi.object({
  title: Joi.string().min(3).required(),
  option_a: Joi.string().min(1).required(),
  option_b: Joi.string().min(1).required(),
  option_c: Joi.string().min(1).required(),
  option_d: Joi.string().min(1).required(),
  answer: Joi.string().max(1).required(),
  created_by: Joi.string().required(),
  subject: Joi.string().min(3),
  testId : Joi.string().required()

});

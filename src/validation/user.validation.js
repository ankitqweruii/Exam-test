import Joi from 'joi'
export const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    userType: Joi.string().required().messages({ 'rule': "must be usertype STUDENT OR TEACHER" }),
    phone: Joi.string().pattern(/^[6-9]\d{9}$/).required().messages({
        'string.pattern.base': 'Phone number must be a valid Indian number with 10 digits starting with 6, 7, 8, or 9'
    }), 
    password:Joi.string().required()
});

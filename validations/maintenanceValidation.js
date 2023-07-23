const Joi = require('joi');
const schema = Joi.object({
    customer_id: Joi.number().integer(),
    phone_number: Joi.number().integer(), 
    odometer:  Joi.number().positive(),
    plate_number: Joi.string(),
    car: Joi.string(),
    payment_method_id: Joi.number().integer().required()
})
module.exports = schema;
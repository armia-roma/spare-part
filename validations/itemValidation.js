const Joi = require("joi");
const schema = Joi.object({
    name: Joi.string().required(),
    part_number: Joi.string().required(),
    location: Joi.string().required(),
    price: Joi.number().positive().required(),
    manufacturer_id: Joi.number().optional().allow().integer(),
    description: Joi.string()
})
module.exports = schema;
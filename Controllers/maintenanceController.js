const maintenanceService = require('./../services/maintenanceService');
const maintenanceValidation = require('./../validations/maintenanceValidation')
const create = async(req, res) => {
    const {error, value} = maintenanceValidation.validate(req.body)
    if (error) {
        const errorMessage = error.details.map((err) => err.message).join(', ');
        return res.status(400).json({ error: errorMessage });
    }else{
        const result = await maintenanceService.create(value)
        res.json(result)
    }
   
    
}
const get = async(req, res) => {
    if(!req.params.id) {
        res.status(400).json({message: "missing id "})
    }
    const result = maintenanceService.get(req.params.id);
    res.json(result)
}
module.exports = {
    create,
    get
}
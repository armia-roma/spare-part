const {Item} = require("./../models")
const create = async(req, res) => {
    const  item = {
        part_number: req.body.part_number,
        name: req.body.name,
        location: req.body.location,
        ManufacturerId: req.body.ManufacturerId
    }
    const result= await Item.create(item)
    res.json(result)
}
const getById = async(req, res) => {
    const id = req.params.id
    const item = await Item.findByPk(id)
    res.json(item)
}
const index = async(req, res) => {
    const items = await Item.findAll();
    res.json(items)
}
module.exports = {
    create,
    getById,
    index
}
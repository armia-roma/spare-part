const manufacturerService = require('./../services/manufacturerService')
const create = (req, res) => {
    manufacturerService.search(req.body.name, function (result) {
        if(result[0]) {
            res.json({ message: "Record already exist"})
        }else {
            manufacturerService.create (req.body, (record) => {
                res.json(record)
            })

        }
    })
}
const find = async(req, res) => {
    const result = await manufacturerService.get(req.params.id);
    res.json(result);
}
const remove = async(req, res) => {
    const result = await manufacturerService.remove(req.params.id);
    if(result.affectedRows) {
        res.json("delete success")
    }
    res.json("no record to delete")
}
const update = async(req, res) => {
    let data = { id: req.params.id, ...req.body}
    const result = await manufacturerService.update(data);
    res.json(result)
}
module.exports = {
    create,
    find,
    remove,
    update
}
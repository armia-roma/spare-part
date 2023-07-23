// const {Item} = require("./../models")
const PadRequest = require('../utils/errors/PadRequest');
const itemSerive = require('./../services/itemService')
const ItemController = {
    create: async function (req, res, next) {
        try {
            const itemData = req.body;
            const item = await itemSerive.create(itemData)
            res.json(item)
        }catch(error) {
            next(error)
        }
    },
    getById: async function(req, res, next) {
        const id = req.params.id
        if(!id) throw PadRequest("missing required parameters: id", 400)
        try{
            const item = await itemSerive.getById(id)
            res.json(item)
        }catch(error) {
            next(error)
        }
    },
    getAll: async function(req, res) {
        try{
            const items = await itemSerive.getAll(req.params)
            res.json(items)
        }catch(error) {
            return res.status(500).json(error)
        }
    },
    update: async function(req, res, next) {
        try{
            const id = req.params.id
            await itemSerive.update(req.body, id)
            res.json({message: "item has been successfully update"})
        }catch(err){
            next(err)  
        }    
    },
    delete: async function (req, res, next) {
        try{
            const id = req.params.id
            await itemSerive.delete(id)
            res.json({message: "item has been delete successfully"})
        }catch(err){
            next(err)
        }
    }
}

module.exports = ItemController

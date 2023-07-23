const itemRepository = require('./../Repositories/itemRepository')
const itemValidation = require('./../validations/itemValidation')
const NotFoundError = require('./../utils/errors/NotFoundError')
const ValidationError = require('../utils/errors/ValidationError')
const formatErrorMessage = require('../utils/formatErrorMessage')
const itemSerive = {
    create: async function(data) {
        try{
            const {error, value} = itemValidation.validate(data)
            if(error) throw new ValidationError(formatErrorMessage(error))

            const result = await itemRepository.create(value)
            const item = this.getById(result.insertId)
            return item
           
        }catch(err) {
            throw err
        }
        
    },
    getById: async function(id) {
        try{
            const item = await itemRepository.getById(id)
            if(!item) throw new NotFoundError("item does not exist", 404)
            return item
        }catch(err) {
            throw err
        }
    },
    getAll: () => {
        return itemRepository.getAll()
    },
    update: async function(data, id) {
        try{
            const {error, value} = itemValidation.validate(data)
            if(error) throw new ValidationError(formatErrorMessage(error))

            const item = await this.getById(id)
            if(!item) throw new NotFoundError("item dose not exist", 404) 

            return itemRepository.update(value)

        }catch(err) {
            throw err
        }
    },
    delete: async function(id) {
        try{
            const item = await this.getById(id)
            if(!item) throw new NotFoundError("item dose not exist", 404) 

            return itemRepository.delete(id)
        }catch(err) {
            throw err
        }
    }
}
module.exports = itemSerive
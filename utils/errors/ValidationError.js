module.exports = class ValidationError extends Error {
    constructor(message){
        super()
        this.message = message
    }
}
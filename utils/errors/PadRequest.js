module.exports = class PadRequest extends Error{ 
    constructor(message, statusCode) {
        super()
        this.message = message
        this.statusCode = statusCode
    }
}
const express = require("express");
const itemController = require('./Controllers/itemController')
const ManufacturerController = require('./Controllers/manufacturerController')
const maintenanceController = require('./Controllers/maintenanceController');
const ValidationError = require("./utils/errors/ValidationError");
const NotFoundError = require("./utils/errors/NotFoundError");

const app  = express();
const  port =  3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: "ok"})
});
app.post('/item', itemController.create)
app.get('/item/:id', itemController.getById)
app.get('/item', itemController.getAll)
app.put('/item/:id', itemController.update)
app.delete('/item/:id', itemController.delete)

app.post('/manufacturer', ManufacturerController.create)
app.get('/manufacturer/:id', ManufacturerController.find)
app.delete('/manufacturer/:id', ManufacturerController.remove)
app.put('/manufacturer/:id', ManufacturerController.update)

app.post('/maintenance', maintenanceController.create)
app.get('/maintenance/:id', maintenanceController.get)
app.use((err, req, res, next) => {
    if(err instanceof ValidationError){
        res.status(400).json(err.message)
    } 
    
    else if(err.status === 404 || err.statusCode === 404 || err instanceof NotFoundError){
        res.status(err.statusCode).send({message: err.message})
    }else if(err.status === 400||err.statusCode === 400){
        res.status(400).json({message: err.message})
    }else if(err.status === 500){
        res.status(500)
    }else{
        next(err)
    }
})
app.listen(port, () => {
    console.log('running')
}) 
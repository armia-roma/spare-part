const express = require("express");
const itemController = require('./Controllers/itemController')
const ManufacturerController = require('./Controllers/manufacturerController')
const app  = express();
const  port =  3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: "ok"})
});
app.post('/item', itemController.create)
app.get('/item/:id', itemController.getById)
app.post('/manufacturer', ManufacturerController.create)
app.get('/manufacturer/:id', ManufacturerController.find)
app.delete('/manufacturer/:id', ManufacturerController.remove)
app.put('/manufacturer/:id', ManufacturerController.update)
app.listen(port, () => {
    console.log('running')
}) 
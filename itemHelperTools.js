function itemMapper(data) {
    return { 
        name :data.name,
        part_number: data.part_number,
        location: data.location, 
        price: data.price, 
        manufacturer_id: data.manufacturer_id, 
        description: data.description 
    }
}
module.exports = itemMapper
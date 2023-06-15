const db = require("./../services/db")
function create(data, cb) {
    db.query(
        `INSERT INTO Manufacturers 
        (name, createdAt, updatedAt) 
        VALUES 
        ("${data.name}", now(), now())`,
        function(err, results){
            if (err){ 
              throw err;
            }
            get(results.insertId).then(result => {
                return cb(result)
            })
        })
}
function get(id) {
    return new Promise((resolve, reject)=> {
        db.query(
            `SELECT * FROM Manufacturers WHERE id = ${id}`,
            function(err, results){
                if (err){ 
                  reject(new Error (err));
                }
                resolve(results)
            }
        )

    })
}
function search(data, cb){
    db.query(
        `SELECT * FROM Manufacturers WHERE name = "${data}"`,
        function(err, results){
            if (err){ 
              throw err;
            }
            return cb(results)
        }
    )
}
function remove(id) {
    return new Promise((resolve, reject) => {
        db.query(
            `DELETE FROM Manufacturers WHERE id=${id}`,
            function(err, results){
                if (err){ 
                  reject(new Error (err));
                }
                resolve(results)
            }
        )
    })
}
function update(data) {
    return new Promise((resolve, reject) => {
        db.query(
            `UPDATE Manufacturers 
                SET name="${data.name}",
                updatedAt= now()
            WHERE id= "${data.id}" `,
            function(err, results){
                if (err){ 
                  reject(err);
                }
                get(data.id).then(result => resolve(result))
            }
        )
    })
}
module.exports = {
    get, 
    create,
    search,
    remove,
    update
}
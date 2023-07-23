const itemMapper = require("../itemHelperTools");
const db = require("./../services/db")
const ItemRepository = {
    create: function (data) {
        return new Promise((resolve, reject) => {
            const item = itemMapper(data)
            const sql = `INSERT INTO item SET ?`
            db.query(
                sql, item, function(err, result){
                    if (err){ 
                        return reject(new Error(err)) ;
                    }
                    resolve(result)
                } 
            )
        })
    },
    getById: function(id) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM item WHERE id = ${id}`,
            function(err, results){
                if (err){ 
                  return reject(new Error (err));
                }
                resolve(results[0])
            })
        })
    },
    getAll: function() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM item`;
            db.query(sql,
            function(err, results){ 
                if(err) return reject(err)
                resolve(results)
            })
        })
    },
    update: (data, id) => {
        return new Promise((resolve, reject) => {
            const item = itemMapper(data)
            const sql = `UPDATE item SET ? WHERE id = ?`
            db.query(
                sql, 
                [item, id], 
                (err, result) => {
                    if (err) {
                        return reject(err)
                    }
                    resolve(result)
                }
            )
        })
    }
    ,
    delete: (id) => {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM item WHERE id = ?`
            db.query(sql, id, 
                (err, result) => {
                    if (err) {
                        return reject(err)
                    }
                    resolve(result)
                }
            )
        })
    }
}
   
module.exports = ItemRepository;
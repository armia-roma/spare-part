const db = require("./../services/db")
const create = (body) => {
    return new Promise((resolve, reject) => {
        db.query(
            `INSERT INTO maintenance 
            (date, customer_id, phone_number, odometer, plate_number, car, payment_method_id)
            values(
                now(), 
                '${body.customer_id}',
                '${body.phone_number}', 
                '${body.odometer}',
                '${body.plate_number}',
                '${body.car}',
                '${body.payment_method_id}')`,
            function(err, results){
                if (err){ 
                  reject(new Error (err));
                }
                get(results['insertId'])
                    .then(result => resolve(result))
                    .catch(err => reject(err))
            }   
        )
        })
    }
    const get = (id) => {
        return new Promise((resolve, reject) => {
            db.query(`select * from maintenance where id = ${id}`, function(err, result) {
                if(err) reject(err)
                resolve(result)
            })
        })
    }
module.exports =  {
    create,
    get
}
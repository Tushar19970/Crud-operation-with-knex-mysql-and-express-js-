const knex = require("knex")({
    client : "mysql",
    connection : {
    host : '127.0.0.1',
    user : "root",
    password : "password",
    database : "tushar"
    }
});

knex.schema.createTable('information', (table) => {
    table.increments("id")
    table.string("name")
    table.string("emails")
    table.string("password")
}).then((data) => {
    console.log("table created")
}).catch((err) => {
    console.log("Table already created ")
})

module.exports = knex
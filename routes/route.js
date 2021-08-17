const express = require("express")
const knex = require('../database/db')
const router = express.Router()
router.use(express.json())

router.get("/home", (req, res) => {
    res.send("This is our home page")
});

router.post('/create', (req,res) => {
    knex('information').insert(req.body).then((data) => {
        res.send({"message" : "data successfully inserted"})
    }).catch((err) => {
        res.send(err.message)
    })
})

router.get('/all', (req,res) => {
    knex.select('*').from('information').then((data) => {
        console.log(data)
        res.send(data)
    })
})

router.get('/get/:id',(req, res) => {
    knex.select('*').from('information').where({'id' : req.params.id}).then((data) => {
        console.log(data)
        res.send(data)
    })
})

router.put('/change/:id', (req, res) => {
    knex('information')
    .where({id : req.params.id})
    .update(req.body).then((data) => {
        res.send({'message' : 'change data'})
    }).catch((err) => {
        res.send(err.message)
    })
})

router.delete('/delete/:id', (req, res) => {
    knex('information')
    .where({id : req.params.id})
    .del().then((data) => {
        res.send({'message' : 'id delete'})
    }).catch((err) => {
        res.send(err.message)
    })
})

module.exports = router
const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/heroDao')

// findAll
// localhsot:3000/api/hero
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// findById
router.get('/', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

router.get('/alignment:/alignment', (req, res)=> {
    dao.findAligment(res, dao.table, req.params.aligment)
})

router.get('/dort', (req, res)=> {
    dao.sort(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findHeroById
})


module.exports = router
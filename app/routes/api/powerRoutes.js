const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/powerDao')

// findAll
// localhsot:3000/api/power
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/pow/:power', (req, res)=>{
    dao.findHerosByTeam(res, dao.table, req.params.power)
})

// findById
router.get('/', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// sort
router.get('/sort', (req, res)=> {
    dao.sortGenral(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findHeroById(res, dao.table, req.params.id)
})


module.exports = router
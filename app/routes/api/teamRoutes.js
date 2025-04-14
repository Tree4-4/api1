const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/teamDao')

// findAll
// localhsot:3000/api/team
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/fran/:team', (req, res)=>{
    dao.findHerosByTeam(res, dao.table, req.params.franchise)
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
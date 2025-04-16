// localhost:3000
// 1
const express = require('express')
const router = express.Router()
const axios = require('axios')
const PORT = process.env.PORT || 3000

// 2
router.use(express.static('public'))

// individual routes 
// router.use('/api/hero', require('./api/heroRoutes'))
// router.use('/api/franchise', require('./api/franchsieRoutes'))

router.use(express.static('public'))

const endpoints = [ 'hero', 'francise', 'team', 'power', 'speices']


//3
// router.get(path, callback function)
router.get('/', (req, res)=> {

    const id = req.params.id
    letheroPowers = []
    const url = `http://localhost:${PORT}/api/hero/${id}`

    const powerURL = `http://localhost:${PORT}/api/hero/${id}/power`

    axios.get(url)
    .then(resp => {
        randomHero = resp.data[Math.floor(Math.random() * resp.data.length)]

        let heroName = randomHero.hero_name != null ? randomHero.hero_name : `${randomHero.first_name} ${randomHero.last_name}`

        switch (randomHero.alignment) {

            case 'HERO': 
                message = `Great news! ${heroName} is here to save you!`
                break;
            case 'ANTIHERO':
                message = `I guess you need to get on ${heroName}'s good side if you want to live.`
                break;
            case 'VILLAIN':
                message = `Looks like ${heroName} is here to destroy you and everything you love`
                break;
            default:
                    message = ''
                    break;
        }
            
            let randomHero = {}
            const url = `http://localhost:${PORT}/api/hero`
            
            res.render('pages/home',{
                title: 'Home',
                name: 'My Hero Website',
                randomHero,
                message
            })
        })
    })  
    

// 1b 
module.exports = router
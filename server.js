// Step 1
const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
// routeer ig gonna go here...
const router = require('./app/routes/router')
const PORT = process.env.PORT || 3000

// Step 3
// Handle Security
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcesPolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data:"],
        "scriptSrc": ["'self'", "cdn.jsdeliver.net"]
    }
}))

server.use(cors())

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// Step 4
// Build root route
// localhost:3000/api
server.get('/api', (req, res)=> {
    res.json({
        'All Heros': `http://localhost:${PORT}/api/hero`
        'All Franchises': `http://localhost${}`
    })
})

// Step 5
// Add router & set view engine
server.use('/', router)
server.set('view engine', 'ejs')

// Step 2
server.listen(PORT, ()=> console.log(`Port ${PORT} is up, up, and away!`))
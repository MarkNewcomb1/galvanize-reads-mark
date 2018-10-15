const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/', (req, res, next) => {
    queries.listAuthors()
        .then(author => {
            res.json({ author })
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    queries.read(req.params.id, 'author')
        .then(author => {
            res.json({ author })
        })
        .catch(next)
})

module.exports = router
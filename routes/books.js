const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/', (req, res, next) => {
    queries.listBooks()
        .then(book => {
            res.json({ book })
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    queries.read(req.params.id, 'book')
        .then(author => {
            res.json({ author })
        })
        .catch(next)
})

module.exports = router
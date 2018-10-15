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

router.post('/new', (req, res) => {
    console.log(req.body)
    queries.post(req.body, 'book')
        .then(book => {
            res.json({ book });
            })
        })

router.delete("/delete/:id", (request, response, next) => {
    queries.delete(request.params.id, 'book').then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/edit/:id", (request, response, next) => {
    queries.update(request.params.id, request.body, 'book').then(books => {
        response.json({books: books});
    }).catch(next);
});

module.exports = router
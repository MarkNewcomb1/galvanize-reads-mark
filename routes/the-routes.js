const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/books", (request, response) => {
    queries.listBooks().then(books => {
        response.json({books});
    }).catch(console.error);
});

router.get("/books/:id", (request, response) => {
    queries.getBookById(request.params.id).then(book => {
        book
            ? response.json({book})
            : response.sendStatus(404)
    }).catch(console.error);
});

router.get("/authors", (request, response) => {
    queries.listAuthors().then(authors => {
        response.json({authors});
    }).catch(console.error);
});

router.get("/authors/:id", (request, response) => {
    queries.getAuthorById(request.params.id).then(author => {
        response.json({author});
    }).catch(console.error);
});

module.exports = router;
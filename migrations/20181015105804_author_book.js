
exports.up = function(knex, Promise) {
    return knex.schema.createTable('author_book', authorsOfBooks => {
        authorsOfBooks.integer('author_id')
            .notNullable()
            .references('id')
            .inTable('author')
            .onDelete('CASCADE')
            .index()
        authorsOfBooks.integer('book_id')
            .notNullable()
            .references('id')
            .inTable('book')
            .onDelete('CASCADE')
            .index()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('author_book')
};
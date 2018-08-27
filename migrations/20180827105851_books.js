exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', books => {
        books.increments();
        books.string('bookTitle');
        books.string('bookGenre');
        books.string('bookDescription', 1000);
        books.string('bookCoverUrl');
        books.integer('author1Id');
        books.integer('author2Id');
        books.integer('author3Id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books');
};
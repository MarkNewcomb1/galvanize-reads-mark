exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', authors => {
        authors.increments();
        authors.string('firstName');
        authors.string('lastName');
        authors.string('biography', 1000);
        authors.string('portraitUrl');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors');
};
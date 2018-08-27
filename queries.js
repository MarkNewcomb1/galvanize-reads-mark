const database = require("./database-connection");

module.exports = {
    listBooks(){
        return database('books')
        .leftOuterJoin('authors as au1', 'books.author1Id' , '=', 'au1.id')
        .leftOuterJoin('authors as au2', 'books.author2Id', '=', 'au2.id')
        .leftOuterJoin('authors as au3', 'books.author3Id', '=', 'au3.id')
        .select({
            bookTitle: 'books.bookTitle', 
            bookGenre: 'books.bookGenre',
            bookDescription: 'books.bookDescription',
            bookCoverUrl: 'books.bookCoverUrl',
            author1FirstName: 'au1.firstName',
            author1LastName: 'au1.lastName',
            author2FirstName: 'au2.firstName',
            author2LastName: 'au2.lastName',
            author3FirstName: 'au3.firstName',
            author3LastName: 'au3.lastName'
        });
    },
    listAuthors(){
        return database('authors').select();
    },
    getBookById(id){
        return database('books').select().where('id', id).first();
    },
    getAuthorById(id){
        return database('authors').select().where('id', id).first();
    }
};
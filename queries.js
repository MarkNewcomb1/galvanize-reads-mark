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
        // return database('authors').select();
        return database('authors')
        .leftJoin('books as b1', 'authors.id', '=', 'b1.author1Id')
        .leftJoin('books as b2', 'authors.id', '=', 'b2.author2Id')
        .leftJoin('books as b3', 'authors.id', '=', 'b3.author3Id')
        
        .select({
            firstName: 'authors.firstName',
            lastName: 'authors.lastName',
            biography: 'authors.biography',
            portraitUrl: 'authors.portraitUrl',
            books: 'b1.bookTitle',
            moreBooks: 'b2.bookTitle',
            evenMoreBooks: 'b3.bookTitle'
        })
    },
    getBookById(id){
        return database('books').select().where('id', id).first();
    },
    getAuthorById(id){
        return database('authors').select().where('id', id).first();
    }
};
exports.seed = function(knex, Promise) {
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([{
          bookTitle: 'Python In A Nutshell',
          bookGenre: 'Python',
          bookDescription: 'This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.',
          bookCoverUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg',
          author1Id: 1,
          author2Id: 2,
          author3Id: 3,
        },
        {
          bookTitle: 'Think Python',
          bookGenre: 'Python',
          bookDescription: 'If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.',
          bookCoverUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/think_python.jpg',
          author1Id: 4,
          author2Id: 0,
          author3Id: 0,
        },
        {
          bookTitle: 'Learning React Native',
          bookGenre: 'JavaScript',
          bookDescription: 'Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you%u2019ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You%u2019ll also discover how to access platform features such as the camera, user location, and local storage.',
          bookCoverUrl: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/learning_react_native.jpg',
          author1Id: 5,
          author2Id: 0,
          author3Id: 0,
        }
      ]);
    });
};
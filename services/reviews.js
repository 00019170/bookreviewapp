const { readData, writeData } = require('./books');

module.exports = {
  async createReview(bookId, reviewData) {
    const books = await readData();
    const book = books.find(b => b.id === bookId);
    
    if (!book) throw new Error('Book not found');
    
    // Используем Array.isArray вместо util.isArray
    if (!Array.isArray(book.reviews)) {
      book.reviews = [];
    }
    
    const newReview = {
      id: require('crypto').randomBytes(16).toString('hex'),
      ...reviewData,
      createdAt: new Date().toISOString()
    };
    
    book.reviews.push(newReview);
    await writeData(books);
    return newReview;
  }
};
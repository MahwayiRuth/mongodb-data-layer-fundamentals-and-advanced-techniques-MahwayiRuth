// MongoDB Queries for PLP Bookstore Database
// Database: plp_bookstore | Collection: books

use plp_bookstore

// ==================== BASIC QUERIES ====================

// Find books in Fiction genre
db.books.find({ genre: "Fiction" })

// Find books published after 1950
db.books.find({ published_year: { $gt: 1950 } })

// Find books by George Orwell
db.books.find({ author: "George Orwell" })

// Update price of "1984" to $13.99
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13.99 } }
)

// Delete "Moby Dick"
db.books.deleteOne({ title: "Moby Dick" })

// ==================== ADVANCED QUERIES ====================

// Books in stock and published after 2010
db.books.find({ 
  in_stock: true, 
  published_year: { $gt: 2010 } 
})

// Show only title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
)

// Sort by price - lowest to highest
db.books.find().sort({ price: 1 })

// Sort by price - highest to lowest
db.books.find().sort({ price: -1 })

// Pagination - Page 1 (5 books)
db.books.find().limit(5)

// Pagination - Page 2
db.books.find().skip(5).limit(5)

// Pagination - Page 3
db.books.find().skip(10).limit(5)

// ==================== AGGREGATION PIPELINES ====================

// Average price by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
])

// Author with most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

// Group by publication decade
db.books.aggregate([
  {
    $addFields: {
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

// ==================== INDEXING ====================

// Create index on title
db.books.createIndex({ title: 1 })

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// Check query performance
db.books.find({ title: "1984" }).explain("executionStats")

// View all indexes
db.books.getIndexes()
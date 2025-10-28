# PLP Bookstore MongoDB Project

## Database Setup
- **Database:** plp_bookstore
- **Collection:** books
- **Platform:** MongoDB Atlas (Free Tier)

## Book Schema
```javascript
{
  title: String,
  author: String,
  genre: String,
  published_year: Number,
  price: Number,
  in_stock: Boolean,
  pages: Number,
  publisher: String
}
```

## Files

### insert_books.js
Script to insert 12 books into the database.

**Run with:**
```bash
mongosh "your-connection-string"
```
Then paste the insertMany command from the file.

### queries.js
Contains all MongoDB queries including:
- Basic CRUD operations
- Advanced filtering and sorting
- Aggregation pipelines
- Indexing

**Run queries with:**
```bash
mongosh "your-connection-string"
use plp_bookstore
# Run queries from queries.js
```

## Setup Steps

1. Created MongoDB Atlas account
2. Set up free cluster
3. Created plp_bookstore database
4. Created books collection
5. Inserted 12 book documents
6. Tested all queries

## Sample Books
- To Kill a Mockingbird
- 1984
- The Great Gatsby
- Brave New World
- The Hobbit
- The Catcher in the Rye
- Pride and Prejudice
- The Lord of the Rings
- Animal Farm
- The Alchemist
- Moby Dick
- Wuthering Heights

## Notes
This project was completed using MongoDB Atlas web interface on mobile. All queries were tested and verified working.
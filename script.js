// Sample Book Data
const books = [
    { id: 1, title: "The Great Gatsby", category: "fiction", author: "F. Scott Fitzgerald" },
    { id: 2, title: "Sapiens", category: "non-fiction", author: "Yuval Noah Harari" },
    { id: 3, title: "Brief History of Time", category: "science", author: "Stephen Hawking" },
    { id: 4, title: "The Art of War", category: "history", author: "Sun Tzu" },
    { id: 5, title: "Steve Jobs", category: "biography", author: "Walter Isaacson" }
  ];
  
  let borrowingHistory = [];
  
  // Function to display books
  function displayBooks(bookList) {
    const bookContainer = document.getElementById("bookContainer");
    bookContainer.innerHTML = "";
    
    bookList.forEach(book => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Category: ${book.category}</p>
        <button onclick="borrowBook(${book.id})">Borrow</button>
      `;
      bookContainer.appendChild(bookCard);
    });
  }
  
  // Function to borrow a book
  function borrowBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
      const historyEntry = `Borrowed "${book.title}" by ${book.author}`;
      borrowingHistory.push(historyEntry);
      displayHistory();
    }
  }
  
  // Function to display borrowing history
  function displayHistory() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    
    borrowingHistory.forEach(entry => {
      const listItem = document.createElement("li");
      listItem.textContent = entry;
      historyList.appendChild(listItem);
    });
  }
  
  // Search Functionality
  function searchBooks() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredBooks = books.filter(book => 
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
  }
  
  // Filter by Category
  function filterBooksByCategory() {
    const category = document.getElementById("categoryFilter").value;
    const filteredBooks = category === "all"
      ? books
      : books.filter(book => book.category === category);
    displayBooks(filteredBooks);
  }
  
  // Initial Display of All Books
  window.onload = function() {
    displayBooks(books);
  };
  
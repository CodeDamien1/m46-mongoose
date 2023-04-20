const Book = require("./model");

const getAllBooks = async (req, res) => {
  
  try {
    const books = await Book.find({});

    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    console.log(error);
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      author: req.body.author,
      genre: req.body.genre,
      title: req.body.title,
    });

    res.status(201).json({ message: "success", newBook: newBook });
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (req, res) => {
  try {
    const updateBook = await Book.update(
      {
        author: req.body.newAuthor,
      },
      {
        where: {
          title: req.body.title,
        },
      }
    );
    res.status(201).json({ message: "success", updateResult: updateBook });
  } catch (error) {
    console.log(error);
  }
};

// delete function for books

const deleteBook = async (req, res) => {
  try {
    const { title } = req.body;
    const book = await Book.destroy({
      where: {
        title: title,
      },
    });
    res.status(201).json({ message: "success", result: book });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook
};

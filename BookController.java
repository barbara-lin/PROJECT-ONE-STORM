package com.skillstorm.projectone.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.projectone.models.Book;
import com.skillstorm.projectone.services.BookService;
import org.springframework.web.bind.annotation.PutMapping;


//all of request methods will be inside of controller
@RestController
@RequestMapping("/books")
@CrossOrigin("http://127.0.0.1:5500/")  //specifies who is allowed to make requests
public class BookController {

    @Autowired
    BookService bookService;
    
    @GetMapping
    public ResponseEntity<List<Book>> findAllBooks() {
        List<Book> book = bookService.findAllBooks();

        return new ResponseEntity<List<Book>>(book, HttpStatus.OK);
    }
    
    @GetMapping("/book/{id}")
    public ResponseEntity<Book> findBookById(@PathVariable int id) {
        Book book = bookService.findBookById(id);

        return new ResponseEntity<Book>(book, HttpStatus.OK);
    }

    //create
    @PostMapping("/book")
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        Book newBook = bookService.saveBook(book);
        return new ResponseEntity<Book>(newBook, HttpStatus.OK);        
    }

    //update
    @PutMapping("/book")
    public ResponseEntity<Book> updateBook(@RequestBody Book book) {
        Book newBook = bookService.saveBook(book);
        return new ResponseEntity<Book>(newBook, HttpStatus.OK);
    }

    @PutMapping("/book/updateTitle")
    public ResponseEntity<Integer> updateBookTitle(@RequestBody Book book, @RequestParam String newTitle) {
        int updated = bookService.updateTitle(book, newTitle);
        return new ResponseEntity<Integer>(updated, HttpStatus.OK);
    }

    //delete
    @DeleteMapping("/book")
    public ResponseEntity<Book> deleteBook(@RequestBody Book book) {
        bookService.deleteBook(book);
        return ResponseEntity.noContent().build();
    }

    // Exception handler for other exceptions
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleOtherExceptions(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + ex.getMessage());
    }

}

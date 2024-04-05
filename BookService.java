package com.skillstorm.projectone.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.skillstorm.projectone.models.Book;
import com.skillstorm.projectone.models.Warehouse;
import com.skillstorm.projectone.repositories.BookRepository;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    @JsonIgnore // Ignore this field during JSON serialization
    WarehouseService warehouseService;

    public List<Book> findAllBooks() {
        return bookRepository.findAll();   //this method comes with jpa
    }
    
    public Book findBookById(int id) {
        Optional<Book> book = bookRepository.findById(id);

        if(book.isPresent()) {     
            return book.get();     
        }
        //checks if object is returned
        //otherwise return null
        return null;

    }

  //this creates and updates book
  public Book saveBook(Book book) {

        Warehouse warehouseWithId = warehouseService.saveWarehouse(book.getWarehouse());
        book.setWarehouse(warehouseWithId);
        return bookRepository.save(book);
    }


    public int updateTitle(Book book, String newTitle) {
        return bookRepository.updateBookTitle(book.getId(), newTitle);
    }

    //deletes book
    public void deleteBook(Book book) {
        bookRepository.delete(book);
    }
}

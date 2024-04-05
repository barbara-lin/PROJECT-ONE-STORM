package com.skillstorm.projectone.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.skillstorm.projectone.models.Book;

import jakarta.transaction.Transactional;

@Repository
//takes in Book object and type of id 
//jpaRepository talks to database
public interface BookRepository extends JpaRepository<Book, Integer>{

    //this will update book title
    @Query("update Book b set b.title = :new_title where id = :book_id")
    @Modifying
    @Transactional
    public int updateBookTitle(@Param("book_id") int id, @Param("new_title") String newTitle);
    
}

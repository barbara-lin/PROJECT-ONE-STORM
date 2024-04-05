package com.skillstorm.projectone.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skillstorm.projectone.models.Warehouse;

@Repository
//takes in Warehouse object and id
public interface WarehouseRepository extends JpaRepository<Warehouse, Integer>{

     @Query("SELECT DISTINCT w FROM Warehouse w LEFT JOIN FETCH w.books")
     List<Warehouse> findAllWithBooks();
    
}

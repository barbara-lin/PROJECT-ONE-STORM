package com.skillstorm.projectone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.projectone.models.Book;
import com.skillstorm.projectone.models.Warehouse;
import com.skillstorm.projectone.repositories.WarehouseRepository;

@Service
public class WarehouseService {

    @Autowired
    WarehouseRepository repository;

    public List<Warehouse> findAllWarehouses() {
        return repository.findAll();   //this method comes with jpa
    }

    public List<Warehouse> findAllWarehousesWithBooks() {
        return repository.findAllWithBooks();
    }

    //creates and updates warehouses
    public Warehouse saveWarehouse(Warehouse warehouse) {
        return repository.save(warehouse);
    }

    //deletes warehouse
    public void deleteWarehouse(Warehouse warehouse) {
        repository.delete(warehouse);
    }
    
}

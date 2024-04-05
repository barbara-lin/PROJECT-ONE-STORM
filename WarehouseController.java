package com.skillstorm.projectone.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.projectone.models.Warehouse;
import com.skillstorm.projectone.services.WarehouseService;

//all of request methods will be inside of controller
@RestController
@RequestMapping("/warehouse")
@CrossOrigin("http://127.0.0.1:5500/")  //specifies who is allowed to make requests
public class WarehouseController {

    @Autowired
    WarehouseService warehouseService;
    
    @GetMapping
    public ResponseEntity<List<Warehouse>> findAllWarehouses() {
        List<Warehouse> warehouse = warehouseService.findAllWarehousesWithBooks();

        return new ResponseEntity<List<Warehouse>>(warehouse, HttpStatus.OK);
    }

    //create
    @PostMapping("/add")
    public ResponseEntity<Warehouse> createWarehouse(@RequestBody Warehouse warehouse) {
        Warehouse newWarehouse= warehouseService.saveWarehouse(warehouse);
        return new ResponseEntity<Warehouse>(newWarehouse, HttpStatus.OK);        
    }

    //update
    @PutMapping("/update")
    public ResponseEntity<Warehouse> updateWarehouse(@RequestBody Warehouse warehouse) {
        Warehouse newWarehouse = warehouseService.saveWarehouse(warehouse);
        return new ResponseEntity<Warehouse>(newWarehouse, HttpStatus.OK);
    }

    //delete
    @DeleteMapping("/trash")
    public ResponseEntity<Warehouse> deleteWarehouse(@RequestBody Warehouse warehouse) {
        warehouseService.deleteWarehouse(warehouse);
        return ResponseEntity.noContent().build();
    }

    // Exception handler for other exceptions
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleOtherExceptions(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + ex.getMessage());
    }

}

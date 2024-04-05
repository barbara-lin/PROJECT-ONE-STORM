package com.skillstorm.projectone.models;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

@Entity
@Table(name = "WAREHOUSES")    //tells jpa this is for table WAREHOUSES
public class Warehouse {

    @Id                                                    //primary key
    @Column                                                //db column
    @GeneratedValue(strategy = GenerationType.IDENTITY)    //AUTO_INCREMENT
    private int id; 

    @Column
    private String location;

    @Column
    @Max(value = 100000, message = "Capacity cannot exceed 100,000")
    @Min(value = 0, message = "Capacity must be at least 0")
    private int capacity;

    @OneToMany(targetEntity = Book.class, mappedBy = "warehouse", fetch = FetchType.EAGER)  //refers to Warehouse warehouse object in Book.java
    private Set<Book> books;

    public Warehouse() {
    }
    
    public Warehouse(String location) {
        this.location = location;
    }

    //constructor without id
    public Warehouse(String location, int max_capacity, Set<Book> books) {
        this.location = location;
        this.capacity = max_capacity;
        this.books = books;
    }

    //constructor with id
    public Warehouse(int id, String location, int max_capacity, Set<Book> books) {
        this.id = id;
        this.location = location;
        this.capacity = max_capacity;
        this.books = books;
    }

    
    //getter and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getMax_capacity() {
        return capacity;
    }

    public void setMax_capacity(int max_capacity) {
        this.capacity = max_capacity;
    }

    public Set<Book> getBooks() {
        return books;
    }

    public void setBooks(Set<Book> books) {
        this.books = books;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((location == null) ? 0 : location.hashCode());
        result = prime * result + capacity;
        result = prime * result + ((books == null) ? 0 : books.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Warehouse other = (Warehouse) obj;
        if (id != other.id)
            return false;
        if (location == null) {
            if (other.location != null)
                return false;
        } else if (!location.equals(other.location))
            return false;
        if (capacity != other.capacity)
            return false;
        if (books == null) {
            if (other.books != null)
                return false;
        } else if (!books.equals(other.books))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Warehouse [id=" + id + ", location=" + location + ", max_capacity=" + capacity + "]";
        //remove book from tostring because it will lead to infinite loop
    }

}

package com.skillstorm.projectone.models;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

@Entity
@Table(name = "BOOKS")
public class Book {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String title;

    @Column
    private String author;

    @Column
    @Max(10000)     //validation constraints that can be used thanks to springboot validation dependency
    @Min(10)
    private int quantity;

    @Column
    private BigDecimal price;

    @ManyToOne                                     //warehouse is the many side of this one to many relationship
    @JoinColumn(name = "warehouse_id")         //foreign key to join on 
    private Warehouse warehouse;

    public Book() {
    }
    
    //constructor without id
    public Book(String title, String author, int quantity, BigDecimal price,
            Warehouse warehouse) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
        this.price = price;
        this.warehouse = warehouse;
    }

    //constructor with id
    public Book(int id, String title, String author, int quantity, BigDecimal price,
            Warehouse warehouse) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.quantity = quantity;
        this.price = price;
        this.warehouse = warehouse;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        result = prime * result + ((author == null) ? 0 : author.hashCode());
        result = prime * result + quantity;
        result = prime * result + ((price == null) ? 0 : price.hashCode());
        result = prime * result + ((warehouse == null) ? 0 : warehouse.hashCode());
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
        Book other = (Book) obj;
        if (id != other.id)
            return false;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        if (author == null) {
            if (other.author != null)
                return false;
        } else if (!author.equals(other.author))
            return false;
        if (quantity != other.quantity)
            return false;
        if (price == null) {
            if (other.price != null)
                return false;
        } else if (!price.equals(other.price))
            return false;
        if (warehouse == null) {
            if (other.warehouse != null)
                return false;
        } else if (!warehouse.equals(other.warehouse))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Book [id=" + id + ", title=" + title + ", author=" + author + ", quantity=" + quantity + ", price="
                + price + ", warehouse=" + warehouse + "]";
    }
}

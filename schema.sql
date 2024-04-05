CREATE TABLE ADMINISTRATOR (
    Administrator_ID INT PRIMARY KEY,
    Username VARCHAR(50) UNIQUE,
    Password VARCHAR(60) -- Assuming hashed password
);

CREATE TABLE WAREHOUSES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255),
    capacity INT
);

CREATE TABLE BOOKS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    quantity INT,
    price DECIMAL(10,2),
    warehouse_id INT,
    FOREIGN KEY (warehouse_id) REFERENCES WAREHOUSES(id)
);






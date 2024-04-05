-- ADMINISTRATOR TABLE

INSERT INTO ADMINISTRATOR (Administrator_ID, Username, Password) VALUES (1, 'admin1', 'password1');
INSERT INTO ADMINISTRATOR (Administrator_ID, Username, Password) VALUES (2, 'admin2', 'password2');
INSERT INTO ADMINISTRATOR (Administrator_ID, Username, Password) VALUES (3, 'admin3', 'password3');


-- WAREHOUSES TABLE

INSERT INTO WAREHOUSES (location, capacity) VALUES ('New Jersey', 13701);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('New York', 27536);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('North Carolina', 7016);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Ohio', 19166);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Pennsylvania', 4093);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('California', 44252);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Texas', 28779);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Florida', 28842);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Illinois', 9912);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Georgia', 18049);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Alaska', 8895);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Arizona', 8895);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Arkansas', 1850);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Colorado', 19018);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Connecticut', 19088);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Delaware', 2609);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Hawaii', 6536);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Idaho', 6684);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Indiana', 12362);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Iowa', 12135);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Kansas', 2474);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Kentucky', 8915);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Louisiana', 5551);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Maine', 17401);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Maryland', 1927);
INSERT INTO WAREHOUSES (location, capacity) VALUES ('Oregon', 14214);




-- BOOKS TABLE


INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('1984', 'George Orwell', 500, 20.99, 1);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE HUNGER GAMES', 'Suzanne Collins', 850, 15.50, 2);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE MARTIAN', 'Andy Weir', 720, 18.75, 3);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE THREE-BODY PROBLEM', 'Liu Cixin', 300, 22.49, 4);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('DIVERGENT', 'Veronica Roth', 410, 14.99, 5);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('READY PLAYER ONE', 'Ernest Cline', 500, 17.25, 6);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE HANDMAID''S TALE', 'Margaret Atwood', 640, 21.99, 7);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('TO ALL THE BOYS I''VE LOVED BEFORE', 'Jenny Han', 200, 12.75, 8);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('TO KILL A MOCKINGBIRD', 'Harper Lee', 180, 16.99, 9);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('HARRY POTTER AND THE SORCERER''S STONE', 'J.K. Rowling', 220, 19.50, 10);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE CATCHER IN THE RYE', 'J.D. Salinger', 170, 14.25, 1);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE GIVER', 'Lois Lowry', 190, 13.99, 2);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE ROAD', 'Cormac McCarthy', 130, 11.75, 3);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE STAND', 'Stephen King', 160, 16.25, 4);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE ALCHEMIST', 'Paulo Coelho', 240, 20.99, 5);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('LIFE OF PI', 'Yann Martel', 200, 15.50, 6);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('ANNIHILATION', 'Jeff VanderMeer', 900, 24.99, 7);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE SHINING', 'Stephen King', 120, 10.99, 8);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE BELL JAR', 'Sylvia Plath', 110, 9.99, 9);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE KITE RUNNER', 'Khaled Hosseini', 130, 11.75, 10);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE GREAT GATSBY', 'F. Scott Fitzgerald', 170, 14.25, 1);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE LORD OF THE RINGS', 'J.R.R. Tolkien', 250, 22.99, 2);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('METAMORPHOSIS', 'Franz Kafka', 200, 19.99, 3);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE GIRL WITH THE DRAGON TATTOO', 'Stieg Larsson', 180, 16.99, 4);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE WIND-UP BIRD CHRONICLE', 'Haruki Murakami', 220, 19.50, 5);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('GONE GIRL', 'Gillian Flynn', 990, 29.99, 6);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE FAULT IN OUR STARS', 'John Green', 170, 14.25, 7);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE CHRONICLES OF NARNIA', 'C.S. Lewis', 210, 18.50, 8);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE LOVELY BONES', 'Alice Sebold', 140, 12.99, 9);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE SECRET LIFE OF BEES', 'Sue Monk Kidd', 160, 15.50, 10);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE NIGHT CIRCUS', 'Erin Morgenstern', 180, 16.99, 1);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE GOLDFINCH', 'Donna Tartt', 200, 18.99, 2);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('WHERE THE CRAWDADS SING', 'Delia Owens', 150, 14.99, 3);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('ME BEFORE YOU', 'Jojo Moyes', 170, 15.75, 4);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('BIG LITTLE LIES', 'Liane Moriarty', 190, 17.99, 5);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE DA VINCI CODE', 'Dan Brown', 210, 20.50, 6);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('EDUCATED', 'Tara Westover', 230, 21.99, 7);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('TO ALL THE BOYS I''VE LOVED BEFORE', 'Jenny Han', 200, 19.25, 8);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE TIME TRAVELER''S WIFE', 'Audrey Niffenegger', 180, 16.99, 9);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE GOLDEN COMPASS', 'Philip Pullman', 200, 18.50, 10);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE SILENT PATIENT', 'Alex Michaelides', 190, 17.99, 1);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE ALCHEMIST', 'Paulo Coelho', 240, 22.99, 2);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE PILLARS OF THE EARTH', 'Ken Follett', 220, 23.50, 3);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE HUNTING PARTY', 'Lucy Foley', 150, 15.99, 4);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE SONG OF ACHILLES', 'Madeline Miller', 870, 30.99, 5);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE NIGHTINGALE', 'Kristin Hannah', 190, 17.99, 6);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('HOUSE OF LEAVES', 'Mark Z. Danielewski', 580, 25.99, 7);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE GLASS CASTLE', 'Jeannette Walls', 160, 14.50, 8);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE BEAR AND THE NIGHTINGALE', 'Katherine Arden', 900, 34.99, 9);
INSERT INTO BOOKS (title, author, quantity, price, warehouse_id) VALUES ('THE PICTURE OF DORIAN GRAY', 'Oscar Wilde', 620, 27.99, 10);


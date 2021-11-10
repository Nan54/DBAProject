DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
cid int AUTO_INCREMENT,
name varchar(30),
email varchar(30),
password varchar(20),
address varchar(40),
primary key (cid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

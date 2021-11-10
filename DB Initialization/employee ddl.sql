DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
eid int AUTO_INCREMENT,
name varchar(30),
ssn int,
address varchar(40),
title varchar(15),
primary key (eid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

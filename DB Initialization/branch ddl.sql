DROP TABLE IF EXISTS branch;
CREATE TABLE branch (
bid int AUTO_INCREMENT,
name varchar(30),
manager int,
address varchar(40),
primary key (bid),
foreign key (manager) references employee(eid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
oid int auto_increment,
carID int,
customerID int,
salesperson int,
branch int,
quantity int,
primary key (oid),
foreign key (carID) references luxmodels(id),
foreign key (branch) references branch(bid),
foreign key (salesperson) references employee(eid),
foreign key (customerID) references customers(cid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE carmodellist (
  `id` int AUTO_INCREMENT,
  `objectId` char(10),
  `Make` varchar(15),
  `Year` int DEFAULT NULL,
  `Model` varchar(20),
  `Category1` varchar(15) DEFAULT NULL,
  `Category2` varchar(15) DEFAULT NULL,
  `Category3` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO luxmodels
          SELECT *
          FROM carmodellist
          WHERE Make in ('acura', 'audi','aston martin','Alfa Romeo', 'Audi', 'Bentley', 'BMW', 'Cadillac', 'Ferrari', 'Fisker', 'Jaguar', 'Lamborghini', 'Land Rover', 'Lexus', 'Lotus',
						'Maserati', 'Maybach', 'McLaren', 'Mercedes-Benz', 'Porsche', 'Rolls-Royce', 'SRT', 'Tesla', 'Volvo')
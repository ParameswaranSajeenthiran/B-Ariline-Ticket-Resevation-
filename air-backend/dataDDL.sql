CREATE TABLE `country` (
  `country_id` varchar(50),
  `country_name` varchar(50),
  PRIMARY KEY (`country_id`)
  
);

CREATE TABLE `city` (
  `city_id` varchar(20),
  `city_name` varchar(50),
  `country_id` varchar(50),
  FOREIGN KEY (`country_id`) REFERENCES `country`(`country_id`)
  
);

CREATE TABLE `airport` (
  `airport_id` varchar(20),
  `city_id` varchar(20),
  PRIMARY KEY (`airport_id`)
  
 
);

CREATE TABLE `exepctedDepartureDelay` (
  `flight_id` varchar(20),
  `excpected_departure` datetime,
  PRIMARY KEY (`flight_id`)
  
);

CREATE table `flight` (
  `flight_id` varchar(20),
  `desitination` varchar(20),
  `origin` varchar(20),
  `airbus_id` varchar(20),
  `departure` datetime,
  `arrival` datetime,
  PRIMARY KEY (`flight_id`),
  FOREIGN KEY (`desitination`) REFERENCES `airport`(`airport_id`),
  FOREIGN KEY (`flight_id`) REFERENCES `exepctedDepartureDelay`(`flight_id`),
  FOREIGN KEY (`origin`) REFERENCES `airport`(`airport_id`),
  KEY `Key` (`departure`, `arrival`)
);

CREATE TABLE `user` (
  `user_id` varchar(50),
  `type` varchar(10),
  `Age` int,
  PRIMARY KEY (`user_id`),
  KEY `Key` (`type`, `Age`)
);

CREATE TABLE `passenger` (
  `passenger_id` varchar(50),
  `user_id` varchar(50),
  PRIMARY KEY (`passenger_id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`)
  
);

CREATE TABLE `passenger` (
  `first_name` varchar(50),
  `last_name` varchar (50),
  `date_of_birth` datetime,
    `nationality` varchar(50),
    `email_address` varchar(30),
  `ticket_id` int,
  `passenger_id` varchar(50),
  PRIMARY KEY (`passenger_id`),
  FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`ticket_id`)
  
);

CREATE TABLE `airbus` (
  `airbus_id` varchar(20),
  PRIMARY KEY (`airBus_id`)
);

CREATE TABLE `booking` (
  `booking_id` varchar(50),
  `seat_id` varchar(50),
  `passenger_id` varchar(50),
  KEY `Key` (`booking_id`, `seat_id`, `passenger_id`)
);

CREATE TABLE `ticket` (
  `ticket_id` int NOT NULL AUTO_INCREMENT,
  `flight_id` int,
  `type` varchar(10),
  PRIMARY KEY (`ticket_id`),
  KEY `Key` (`flight_id`, `type`)
);

CREATE TABLE `seat` (
  `seat_id` varchar(50),
  `airbus_id` varchar(20),
  `row` int,
  `column` int,
  `availabilty` bool,
  PRIMARY KEY (`seat_id`),
  FOREIGN KEY (`airbus_id`) REFERENCES `airbus`(`airBus_id`),
  KEY `Key` (`row`, `column`, `availabilty`)
);

CREATE TABLE `exepctedArrivalDelayus` (
  `flight_id` varchar(20),
  `expected_arrival` datetime,
  PRIMARY KEY (`flight_id`),
  KEY `Key` (`expected_arrival`)
);


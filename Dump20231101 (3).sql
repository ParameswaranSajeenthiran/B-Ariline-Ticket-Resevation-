-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: finalbairline
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aircraft`
--

DROP TABLE IF EXISTS `aircraft`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aircraft` (
  `AircraftID` varchar(50) NOT NULL,
  `Model` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`AircraftID`),
  KEY `Model` (`Model`),
  CONSTRAINT `aircraft_ibfk_1` FOREIGN KEY (`Model`) REFERENCES `model` (`Model`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `airport`
--

DROP TABLE IF EXISTS `airport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airport` (
  `AirportCode` varchar(50) NOT NULL,
  `AirportName` varchar(50) DEFAULT NULL,
  `CityCode` int DEFAULT NULL,
  PRIMARY KEY (`AirportCode`),
  KEY `CityCode` (`CityCode`),
  KEY `Key` (`AirportName`),
  CONSTRAINT `airport_ibfk_1` FOREIGN KEY (`CityCode`) REFERENCES `location` (`LocationID`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `BookingID` int NOT NULL AUTO_INCREMENT,
  `FlightID` int DEFAULT NULL,
  `PassengerID` int DEFAULT NULL,
  `SeatID` int DEFAULT NULL,
  `PaymentStatus` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`BookingID`),
  KEY `FlightID` (`FlightID`),
  KEY `PassengerID` (`PassengerID`),
  KEY `Key` (`PaymentStatus`),
  CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`FlightID`) REFERENCES `flight` (`FlightID`) ON DELETE SET NULL,
  CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`PassengerID`) REFERENCES `passenger` (`PassengerID`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `citynew`
--

DROP TABLE IF EXISTS `citynew`;
/*!50001 DROP VIEW IF EXISTS `citynew`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `citynew` AS SELECT 
 1 AS `LocationID`,
 1 AS `LocationName`,
 1 AS `LocationType`,
 1 AS `ParentID`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `countrynew`
--

DROP TABLE IF EXISTS `countrynew`;
/*!50001 DROP VIEW IF EXISTS `countrynew`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `countrynew` AS SELECT 
 1 AS `LocationID`,
 1 AS `LocationName`,
 1 AS `LocationType`,
 1 AS `ParentID`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `delay`
--

DROP TABLE IF EXISTS `delay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delay` (
  `DelayID` int NOT NULL AUTO_INCREMENT,
  `FlightID` int DEFAULT NULL,
  `DelayTime` time DEFAULT NULL,
  `isArrival` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`DelayID`),
  KEY `FlightID` (`FlightID`),
  KEY `Key` (`DelayTime`,`isArrival`),
  CONSTRAINT `delay_ibfk_1` FOREIGN KEY (`FlightID`) REFERENCES `flight` (`FlightID`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `flight`
--

DROP TABLE IF EXISTS `flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flight` (
  `FlightID` int NOT NULL AUTO_INCREMENT,
  `AircraftID` varchar(50) DEFAULT NULL,
  `FlightNumber` varchar(50) DEFAULT NULL,
  `DepartureDateTime` datetime DEFAULT NULL,
  `ArrivalDateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`FlightID`),
  KEY `AircraftID` (`AircraftID`),
  KEY `FlightNumber` (`FlightNumber`),
  KEY `Key` (`DepartureDateTime`,`ArrivalDateTime`),
  CONSTRAINT `flight_ibfk_1` FOREIGN KEY (`AircraftID`) REFERENCES `aircraft` (`AircraftID`) ON DELETE SET NULL,
  CONSTRAINT `flight_ibfk_2` FOREIGN KEY (`FlightNumber`) REFERENCES `route` (`FlightNumber`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=1221 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `guest`
--

DROP TABLE IF EXISTS `guest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guest` (
  `GuestID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Nationality` varchar(50) DEFAULT NULL,
  `PassportNumber` varchar(50) DEFAULT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `ContactNumber1` varchar(20) DEFAULT NULL,
  `ContactNumber2` varchar(20) DEFAULT NULL,
  `EmailAddress` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`GuestID`),
  KEY `Key` (`FirstName`,`LastName`,`Nationality`,`PassportNumber`,`DateOfBirth`,`ContactNumber1`,`ContactNumber2`,`EmailAddress`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `LocationID` int NOT NULL AUTO_INCREMENT,
  `LocationName` varchar(50) DEFAULT NULL,
  `LocationType` enum('Country','State','City') DEFAULT NULL,
  `ParentID` int DEFAULT NULL,
  PRIMARY KEY (`LocationID`),
  KEY `ParentID` (`ParentID`),
  KEY `Key` (`LocationName`,`LocationType`),
  CONSTRAINT `location_ibfk_1` FOREIGN KEY (`ParentID`) REFERENCES `location` (`LocationID`)
) ENGINE=InnoDB AUTO_INCREMENT=310 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `model`
--

DROP TABLE IF EXISTS `model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model` (
  `Model` varchar(50) NOT NULL,
  `PlatinumSeats` int DEFAULT NULL,
  `BusinessSeats` int DEFAULT NULL,
  `EconomySeats` int DEFAULT NULL,
  PRIMARY KEY (`Model`),
  KEY `Key` (`PlatinumSeats`,`BusinessSeats`,`EconomySeats`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `passenger`
--

DROP TABLE IF EXISTS `passenger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passenger` (
  `PassengerID` int NOT NULL AUTO_INCREMENT,
  `PassengerType` enum('Registered','Guest') DEFAULT NULL,
  `UserID` int DEFAULT NULL,
  `GuestID` int DEFAULT NULL,
  PRIMARY KEY (`PassengerID`),
  KEY `UserID` (`UserID`),
  KEY `GuestID` (`GuestID`),
  KEY `Key` (`PassengerType`),
  CONSTRAINT `passenger_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `registereduser` (`UserID`) ON DELETE SET NULL,
  CONSTRAINT `passenger_ibfk_2` FOREIGN KEY (`GuestID`) REFERENCES `guest` (`GuestID`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `PaymentID` int NOT NULL AUTO_INCREMENT,
  `BookingID` int DEFAULT NULL,
  `PassengerID` int DEFAULT NULL,
  `Timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`PaymentID`),
  KEY `BookingID` (`BookingID`),
  KEY `PassengerID` (`PassengerID`),
  KEY `Key` (`Timestamp`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`BookingID`) REFERENCES `booking` (`BookingID`) ON DELETE SET NULL,
  CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`PassengerID`) REFERENCES `passenger` (`PassengerID`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `updateUserType` AFTER INSERT ON `payment` FOR EACH ROW begin
DECLARE 
v_count int;
SELECT bookingCount
    INTO v_count
    FROM UserBookingCount
    WHERE UserID =  ( select DISTINCTROW  UserID from  Passenger  where PassengerID=NEW.PassengerID);

  IF v_count between 5 and 10
  THEN
		UPDATE registeredUser SET UserType = 'Frequent' WHERE UserID =  ( select DISTINCTROW UserID from  Passenger where PassengerID=NEW.PassengerID);

  END IF;
 

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `price`
--

DROP TABLE IF EXISTS `price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `price` (
  `FlightID` int NOT NULL,
  `PlatinumPrice` float DEFAULT NULL,
  `BusinessPrice` float DEFAULT NULL,
  `EconomyPrice` float DEFAULT NULL,
  PRIMARY KEY (`FlightID`),
  KEY `Key` (`PlatinumPrice`,`BusinessPrice`,`EconomyPrice`),
  CONSTRAINT `price_ibfk_1` FOREIGN KEY (`FlightID`) REFERENCES `flight` (`FlightID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `registereduser`
--

DROP TABLE IF EXISTS `registereduser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registereduser` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(50) DEFAULT NULL,
  `Password` char(60) DEFAULT NULL,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Nationality` varchar(50) DEFAULT NULL,
  `PassportNumber` varchar(50) DEFAULT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `UserType` enum('Admin','Frequent','Gold') DEFAULT NULL,
  `ContactNumber1` varchar(20) DEFAULT NULL,
  `ContactNumber2` varchar(20) DEFAULT NULL,
  `EmailAddress` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`UserID`),
  KEY `UserType` (`UserType`),
  KEY `Key` (`Username`,`Password`,`FirstName`,`LastName`,`Nationality`,`PassportNumber`,`DateOfBirth`,`ContactNumber1`,`ContactNumber2`,`EmailAddress`),
  KEY `idx_registereduser_UserID` (`UserID`),
  CONSTRAINT `registereduser_ibfk_1` FOREIGN KEY (`UserType`) REFERENCES `usertype` (`UserType`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `triggerWhenRegistering` AFTER INSERT ON `registereduser` FOR EACH ROW begin
insert into UserBookingCount values (NEW.UserID,0);
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `route`
--

DROP TABLE IF EXISTS `route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `route` (
  `FlightNumber` varchar(50) NOT NULL,
  `Origin` varchar(50) DEFAULT NULL,
  `Destination` varchar(50) DEFAULT NULL,
  `Duration` time DEFAULT NULL,
  PRIMARY KEY (`FlightNumber`),
  KEY `Origin` (`Origin`),
  KEY `Destination` (`Destination`),
  KEY `Key` (`Duration`),
  CONSTRAINT `route_ibfk_1` FOREIGN KEY (`Origin`) REFERENCES `airport` (`AirportCode`) ON DELETE SET NULL,
  CONSTRAINT `route_ibfk_2` FOREIGN KEY (`Destination`) REFERENCES `airport` (`AirportCode`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat` (
  `SeatID` int NOT NULL AUTO_INCREMENT,
  `FlightID` int NOT NULL,
  `RowN` int DEFAULT NULL,
  `ColumnN` int DEFAULT NULL,
  `Availability` tinyint(1) DEFAULT NULL,
  `TravelClass` enum('Economy','Business','Platinum') DEFAULT NULL,
  PRIMARY KEY (`SeatID`,`FlightID`),
  KEY `FlightID` (`FlightID`),
  KEY `Key` (`RowN`,`ColumnN`,`Availability`,`TravelClass`),
  KEY `flight_seats` (`FlightID`),
  CONSTRAINT `seat_ibfk_1` FOREIGN KEY (`FlightID`) REFERENCES `flight` (`FlightID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=325417 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `statenew`
--

DROP TABLE IF EXISTS `statenew`;
/*!50001 DROP VIEW IF EXISTS `statenew`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `statenew` AS SELECT 
 1 AS `LocationID`,
 1 AS `LocationName`,
 1 AS `LocationType`,
 1 AS `ParentID`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `userbookingcount`
--

DROP TABLE IF EXISTS `userbookingcount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userbookingcount` (
  `UserID` int DEFAULT NULL,
  `BookingCount` int DEFAULT NULL,
  KEY `UserID` (`UserID`),
  KEY `Key` (`BookingCount`),
  CONSTRAINT `userbookingcount_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `registereduser` (`UserID`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usertype`
--

DROP TABLE IF EXISTS `usertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertype` (
  `UserType` enum('Admin','Guest','Frequent','Gold') NOT NULL,
  `Discount` float DEFAULT NULL,
  PRIMARY KEY (`UserType`),
  KEY `Key` (`Discount`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'finalbairline'
--

--
-- Dumping routines for database 'finalbairline'
--
/*!50003 DROP PROCEDURE IF EXISTS `booking` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `booking`(  in is_guest int , in userId int, in FirstName varchar(50) , in LastName varchar(50), in Nationality varchar(50),in PassportNumber varchar(50) ,in DateOfBirth date ,in ContactNumber1 varchar(20), in ContactNumber2 varchar(20),in EmailAddress varchar(50) , in FlightId int , in  seat_id int , in  PaymentStatus  tinyint(1) )
begin 
  declare booking_id integer;
    declare guset_id integer;
	declare passenger_id integer ;

 start transaction;
 if is_guest=0
 then
 call createPassenger ('Registered', userID, null);
 
 else 
 call createGuest(FirstName,LastName, Nationality,PassportNumber ,DateOfBirth ,ContactNumber1,ContactNumber2, EmailAddress );
 SELECT LAST_INSERT_ID() into guset_id ;
  call createPassenger ('Guest', null, guset_id);
 end if;
 
 select LAST_INSERT_ID() into passenger_id;
 -- select * from passenger;
--  select * from guest;
 insert into Booking (FlightId,PassengerID, SeatID, PaymentStatus) values ( FlightId,passenger_id, seat_id, PaymentStatus);
 select LAST_INSERT_ID() into booking_id;
-- select * from booking;
 update Seat set Availability=0 where SeatID=seat_id;
 
 
 select * from booking natural join passenger where bookingID=booking_id;
 -- select * from seat where SeatID=seat_id;
 
 
 commit;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createGuest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createGuest`(in FirstName varchar(50) , in LastName varchar(50), in Nationality varchar(50),in PassportNumber varchar(50) ,in DateOfBirth date ,in ContactNumber1 varchar(20), in ContactNumber2 varchar(20),in EmailAddress varchar(50) )
begin 

insert into Guest(FirstName,LastName, Nationality,PassportNumber ,DateOfBirth ,ContactNumber1,ContactNumber2, EmailAddress  ) values ( FirstName,LastName, Nationality,PassportNumber ,DateOfBirth ,ContactNumber1,ContactNumber2, EmailAddress);
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createPassenger` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createPassenger`(in passengerType varchar(30) ,in userID int, in GuestID int )
begin 

 if passengerType='Guest'
	then
	insert into Passenger ( PassengerType,UserID, GuestID ) values ("Guest",NULL,GuestID);
ELSE
	insert into Passenger ( PassengerType,UserID, GuestID ) values ("Registered",userID,NULL);   
end if;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ValidateBooking` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ValidateBooking`(  in id int)
begin 
 declare payment_status integer;
select PaymentStatus into payment_status
from Booking
where BookingID = id;

 if payment_status=0
 then

 UPDATE seat SET Availability =1  WHERE SeatID  in ( select DISTINCTROW SeatID from  Booking where BookingID=id);
  
 end if;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `citynew`
--

/*!50001 DROP VIEW IF EXISTS `citynew`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `citynew` AS select `location`.`LocationID` AS `LocationID`,`location`.`LocationName` AS `LocationName`,`location`.`LocationType` AS `LocationType`,`location`.`ParentID` AS `ParentID` from `location` where (`location`.`LocationID` like '3%') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `countrynew`
--

/*!50001 DROP VIEW IF EXISTS `countrynew`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `countrynew` AS select `location`.`LocationID` AS `LocationID`,`location`.`LocationName` AS `LocationName`,`location`.`LocationType` AS `LocationType`,`location`.`ParentID` AS `ParentID` from `location` where (`location`.`LocationID` like '1%') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `statenew`
--

/*!50001 DROP VIEW IF EXISTS `statenew`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `statenew` AS select `location`.`LocationID` AS `LocationID`,`location`.`LocationName` AS `LocationName`,`location`.`LocationType` AS `LocationType`,`location`.`ParentID` AS `ParentID` from `location` where (`location`.`LocationID` like '2%') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-01 19:17:12

CREATE TABLE `Route` (
  `FlightNumber` varchar(50),
  `Origin` varchar(50),
  `Destination` varchar(50),
  `Duration` time,
  PRIMARY KEY (`FlightNumber`),
  KEY `Key` (`Duration`)
);

CREATE TABLE `Model` (
  `Model` varchar(50),
  `PlatinumSeats` int,
  `BusinessSeats` int,
  `EconomySeats` int,
  PRIMARY KEY (`Model`),
  KEY `Key` (`PlatinumSeats`, `BusinessSeats`, `EconomySeats`)
);

CREATE TABLE `Aircraft` (
  `AircraftID` varchar(50),
  `Model` varchar(50),
  PRIMARY KEY (`AircraftID`),
  FOREIGN KEY (`Model`) REFERENCES `Model`(`Model`)
);

CREATE TABLE `Flight` (
  `FlightID` int,
  `AircraftID` varchar(50),
  `FlightNumber` varchar(50),
  `DepartureDateTime` datetime,
  `ArrivalDateTime` datetime,
  PRIMARY KEY (`FlightID`),
  FOREIGN KEY (`FlightNumber`) REFERENCES `Route`(`FlightNumber`),
  FOREIGN KEY (`AircraftID`) REFERENCES `Aircraft`(`AircraftID`),
  KEY `Key` (`DepartureDateTime`, `ArrivalDateTime`)
);

CREATE TABLE `Delay` (
  `DelayID` int,
  `FlightID` int,
  `ExpectedTime` datetime,
  `isArrival` bool,
  PRIMARY KEY (`DelayID`),
  FOREIGN KEY (`FlightID`) REFERENCES `Flight`(`FlightID`),
  KEY `Key` (`ExpectedTime`, `isArrival`)
);

CREATE TABLE `Price` (
  `FlightID` int,
  `PlatinumPrice` float,
  `BusinessPrice` float,
  `EconomyPrice` float,
  PRIMARY KEY (`FlightID`),
  KEY `Key` (`PlatinumPrice`, `BusinessPrice`, `EconomyPrice`)
);

CREATE TABLE `State` (
  `StateCode` int,
  `StateName` varchar(50),
  PRIMARY KEY (`StateCode`),
  KEY `Key` (`StateName`)
);

CREATE TABLE `Country` (
  `CountryCode` int,
  `CountryName` varchar(50),
  PRIMARY KEY (`CountryCode`),
  KEY `Key` (`CountryName`)
);

CREATE TABLE `Exist` (
  `Parent` int,
  `Child` int,
  `ParentType` ENUM('Country', 'State','City') NOT NULL,
  PRIMARY KEY (`Child`),
  FOREIGN KEY (`Parent`) REFERENCES `State`(`StateCode`),
  FOREIGN KEY (`Parent`) REFERENCES `Country`(`CountryCode`),
  KEY `key` (`ParentType`)
);

CREATE TABLE `City` (
  `CityCode` int,
  `CityName` varchar(50),
  PRIMARY KEY (`CityCode`),
  KEY `Key` (`CityName`)
);

CREATE TABLE `Airport` (
  `AirportCode` varchar(50),
  `AirportName` varchar(50),
  `CityCode` int,
  PRIMARY KEY (`AirportCode`),
  FOREIGN KEY (`CityCode`) REFERENCES `City`(`CityCode`),
  KEY `Key` (`AirportName`)
);

CREATE TABLE `UserType` (
  `UserType` ENUM('GOLD', 'Frequent') NOT NULL,
  `Discount` float,
  PRIMARY KEY (`UserType`),
  KEY `Key` (`Discount`)
);

CREATE TABLE `Seat` (
  `SeatID` int,
  `FlightID` int,
  `RowN` int,
  `ColumnN` int,
  `Availability` bool,
  `TravelClass` ENUM('GOLD', 'Frequent') NOT NULL,
  PRIMARY KEY (`SeatID`),
  FOREIGN KEY (`FlightID`) REFERENCES `Flight`(`FlightID`),
  KEY `Key` (`RowN`, `ColumnN`, `Availability`, `TravelClass`)
);

CREATE TABLE `RegisteredUser` (
  `Username` varchar(50),
  `Password` varchar(50),
  `FirstName` varchar(50),
  `LastName` varchar(50),
  `Nationality` varchar(50),
  `PassportNumber` varchar(50),
  `DateOfBirth` date,
  `UserType` ENUM('GOLD', 'Frequent') NOT NULL,
  `ContactNumber` int,
  `EmailAddress` varchar(50),
  PRIMARY KEY (`Username`),
  KEY `Key` (`Password`, `FirstName`, `LastName`, `Nationality`, `PassportNumber`, `DateOfBirth`, `ContactNumber`, `EmailAddress`)
);

CREATE TABLE `RegisteredPassenger` (
  `PassengerID` int,
  `Username` varchar(50),
  PRIMARY KEY (`PassengerID`),
  FOREIGN KEY (`Username`) REFERENCES `RegisteredUser`(`Username`)
);

CREATE TABLE `Booking` (
  `BookingID` int,
  `FlightID` int,
  `PassengerID` int,
  `SeatID` int,
  `PaymentStatus` bool,
  PRIMARY KEY (`BookingID`),
  FOREIGN KEY (`FlightID`) REFERENCES `Flight`(`FlightID`),
  KEY `Key` (`PaymentStatus`)
);

CREATE TABLE `Location` (
  `LocationID` int,
  `LocationName` varchar(50),
  `LocationType` ENUM('Country', 'State','City') NOT NULL,
  `ParentID` int,
  PRIMARY KEY (`LocationID`),
  FOREIGN KEY (`LocationID`) REFERENCES `Location`(`ParentID`),
  KEY `Key` (`LocationName`, `LocationType`)
);

CREATE TABLE `Admin` (
  `Username` varchar(50),
  `Password` varchar(50),
  `FirstName` varchar(50),
  `LastName` varchar(50),
  `ContactNumber` int,
  `EmailAddress` varchar(50),
  `AccessStartDateTime` datetime,
  `AccessEndDateTime` datetime,
  PRIMARY KEY (`Username`),
  KEY `Key` (`Password`, `FirstName`, `LastName`, `ContactNumber`, `EmailAddress`, `AccessStartDateTime`, `AccessEndDateTime`)
);

CREATE TABLE `Passenger` (
  `PassengerID` int,
  `FirstName` varchar(50),
  `LastName` varchar(50),
  `Nationality` varchar(50),
  `PassportNumber` varchar(50),
  `DateOfBirth` date,
  `ContactNumber` int,
  `EmailAddress` varchar(50),
  `Registered` bool,
  PRIMARY KEY (`PassengerID`),
  KEY `Key` (`FirstName`, `LastName`, `Nationality`, `PassportNumber`, `DateOfBirth`, `ContactNumber`, `EmailAddress`, `Registered`)
);

CREATE TABLE `Payment` (
  `PaymentID` int,
  `BookingID` int,
  `PassengerID` int,
  `Timestamp` datetime,
  PRIMARY KEY (`PaymentID`),
  FOREIGN KEY (`PassengerID`) REFERENCES `Passenger`(`PassengerID`),
  KEY `Key` (`Timestamp`)
);


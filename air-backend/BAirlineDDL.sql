CREATE TABLE `Location` (
  `LocationID` int AUTO_INCREMENT,
  `LocationName` varchar(50),
  `LocationType` enum('Country','State','City'),
  `ParentID` int,
  PRIMARY KEY (`LocationID`),
  KEY `Key` (`LocationName`),
  FOREIGN KEY (`ParentID`) references `Location` (`LocationID`)
);

CREATE TABLE `Airport` (
  `AirportCode` varchar(50),
  `AirportName` varchar(50),
  `LocationID` int,
  PRIMARY KEY (`AirportCode`),
  KEY `Key` (`AirportName`),
  FOREIGN KEY (`LocationID`) references `Location`(`LocationID`)
		on delete set null
);

CREATE TABLE `Route` (  
  `FlightNumber` varchar(50),
  `Origin` varchar(50),
  `Destination` varchar(50),
  `Duration` time,
  PRIMARY KEY (`FlightNumber`),
  KEY `Key` (`Duration`),
  FOREIGN KEY (`Origin`) references `Airport`(`AirportCode`)
		on delete set null,
  FOREIGN KEY (`Destination`) references `Airport`(`AirportCode`)
		on delete set null
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
  FOREIGN KEY (`Model`) references `Model`(`Model`)
		on delete set null
);

CREATE TABLE `Flight` (
  `FlightID` int AUTO_INCREMENT,
  `AircraftID` varchar(50),
  `FlightNumber` varchar(50),
  `DepartureDateTime` datetime,
  `ArrivalDateTime` datetime,
  PRIMARY KEY (`FlightID`),
  KEY `Key` (`DepartureDateTime`, `ArrivalDateTime`),
  FOREIGN KEY (`AircraftID`) references `Aircraft`(`AircraftID`),
  FOREIGN KEY (`FlightNumber`) references `Route`(`FlightNumber`)
		
);

CREATE TABLE `Price` (
  `FlightID` int,
  `PlatinumPrice` float,
  `BusinessPrice` float,
  `EconomyPrice` float,
  PRIMARY KEY (`FlightID`),
  KEY `Key` (`PlatinumPrice`, `BusinessPrice`, `EconomyPrice`),
  FOREIGN KEY (`FlightID`) references `Flight`(`FlightID`)
);

CREATE TABLE `Delay` (
  `DelayID` int AUTO_INCREMENT,
  `FlightID` int,
  `ExpectedTime` datetime,
  `isArrival` bool,
  PRIMARY KEY (`DelayID`),
  KEY `Key` (`ExpectedTime`, `isArrival`),
  FOREIGN KEY (`FlightID`) references `Flight`(`FlightID`)
		on delete set null
);

CREATE TABLE `Seat` (
  `SeatID` int AUTO_INCREMENT,
  `FlightID` int,
  `RowN` int,
  `ColumnN` int,
  `Availability` bool,
  `TravelClass` enum('Economy','Business','Platinum'),
  PRIMARY KEY (`SeatID`),
  KEY `Key` (`RowN`, `ColumnN`, `Availability`, `TravelClass`),
  FOREIGN KEY (`FlightID`) references `Flight`(`FlightID`)
		on delete set null
);

CREATE TABLE `Passenger` (
  `PassengerID` int AUTO_INCREMENT,
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

CREATE TABLE `Booking` (
  `BookingID` int AUTO_INCREMENT,
  `FlightID` int,
  `PassengerID` int,
  `SeatID` int,
  `PaymentStatus` bool,
  PRIMARY KEY (`BookingID`),
  KEY `Key` (`PaymentStatus`),
  FOREIGN KEY (`FlightID`) references `Flight`(`FlightID`)
		on delete set null,
  FOREIGN KEY (`PassengerID`) references `Passenger`(`PassengerID`)
		on delete set null
);

CREATE TABLE `Payment` (
  `PaymentID` int AUTO_INCREMENT,
  `BookingID` int,
  `PassengerID` int,
  `Timestamp` datetime,
  PRIMARY KEY (`PaymentID`),
  KEY `Key` (`Timestamp`),
  FOREIGN KEY (`BookingID`) references `Booking`(`BookingID`)
		on delete set null,
  FOREIGN KEY (`PassengerID`) references `Passenger`(`PassengerID`)
		on delete set null
);

CREATE TABLE `UserType` (
  `UserType` enum('Guest','Frequent','Gold'),
  `Discount` float,
  PRIMARY KEY (`UserType`),
  KEY `Key` (`Discount`)
);

CREATE TABLE `RegisteredUser` (
  `Username` varchar(50),
  `Password` char(60),
  `FirstName` varchar(50),
  `LastName` varchar(50),
  `Nationality` varchar(50),
  `PassportNumber` varchar(50),
  `DateOfBirth` date,
  `UserType` enum('Frequent','Gold'),
  `ContactNumber` varChar(20),
  `EmailAddress` varchar(50),
  PRIMARY KEY (`Username`),
  KEY `Key` (`Password`, `FirstName`, `LastName`, `Nationality`, `PassportNumber`, `DateOfBirth`, `ContactNumber`, `EmailAddress`),
 
);

CREATE TABLE `RegisteredPassenger` (
  `PassengerID` int,
  `Username` varchar(50),
  PRIMARY KEY (`PassengerID`),
  FOREIGN KEY (`PassengerID`) references `Passenger`(`PassengerID`),
  FOREIGN KEY (`Username`) references `RegisteredUser`(`Username`)
		on delete set null
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
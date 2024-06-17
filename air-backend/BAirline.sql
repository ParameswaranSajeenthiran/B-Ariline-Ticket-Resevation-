delete from Country;
delete from City;
delete from Airport;
delete from Flight;
delete from Delay;
delete from Aircraft;
delete from Seat;
delete from Ticket;
delete from Booking;
delete from Payment;
delete from User;


insert into Location (LocationId ,LocationName, LocationType, ParentID) values (101,'Indonesia', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Sri Lanka', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('India', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Thailand', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Singapore', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('United States of America', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Mexico', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('England', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('France', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Italy', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Germany', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Spain', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Netherlands', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Turkey', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('United Arab Emirates', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Qatar', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Japan', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('South Korea', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('China', 'Country', NULL);
insert into Location (LocationName, LocationType, ParentID) values ('Australia', 'Country', NULL);


insert into Location (LocationId,LocationName, LocationType, ParentID) values (201,'Delhi', 'State', 103);
insert into Location (LocationName, LocationType, ParentID) values ('Maharashtra', 'State', 103);
insert into Location (LocationName, LocationType, ParentID) values ('Tamil Nadu', 'State', 103);
insert into Location (LocationName, LocationType, ParentID) values ('New York', 'State', 106);
insert into Location (LocationName, LocationType, ParentID) values ('Illinois', 'State', 106);
insert into Location (LocationName, LocationType, ParentID) values ('California', 'State', 106);
insert into Location (LocationName, LocationType, ParentID) values ('Mexico City', 'State', 107);
insert into Location (LocationName, LocationType, ParentID) values ('Bavaria', 'State', 111);
insert into Location (LocationName, LocationType, ParentID) values ('Hesse', 'State', 111);
insert into Location (LocationName, LocationType, ParentID) values ('New South Wales', 'State', 120);
insert into Location (LocationName, LocationType, ParentID) values ('Victoria', 'State', 120);


insert into Location (LocationId,LocationName, LocationType, ParentID) values (301,'Tangerang', 'City', 101);
insert into Location (LocationName, LocationType, ParentID) values ('Badung', 'City', 101);
insert into Location (LocationName, LocationType, ParentID) values ('Katunayake', 'City', 102);
insert into Location (LocationName, LocationType, ParentID) values ('Mattala', 'City', 102);
insert into Location (LocationName, LocationType, ParentID) values ('Palam', 'City', 201);
insert into Location (LocationName, LocationType, ParentID) values ('Mumbai', 'City', 202);
insert into Location (LocationName, LocationType, ParentID) values ('Chennai', 'City', 203);
insert into Location (LocationName, LocationType, ParentID) values ('Bangkok', 'City', 104);
insert into Location (LocationName, LocationType, ParentID) values ('Changi', 'City', 105);
insert into Location (LocationName, LocationType, ParentID) values ('New York City', 'City', 204);
insert into Location (LocationName, LocationType, ParentID) values ('Chicago', 'City', 205);
insert into Location (LocationName, LocationType, ParentID) values ('Los Angeles', 'City', 206);
insert into Location (LocationName, LocationType, ParentID) values ('San Francisco', 'City', 206);
insert into Location (LocationName, LocationType, ParentID) values ('Venustiano Carranza', 'City', 207);
insert into Location (LocationName, LocationType, ParentID) values ('London', 'City', 108);
insert into Location (LocationName, LocationType, ParentID) values ('Paris', 'City', 109);
insert into Location (LocationName, LocationType, ParentID) values ('Rome', 'City', 110);
insert into Location (LocationName, LocationType, ParentID) values ('Munich', 'City', 208);
insert into Location (LocationName, LocationType, ParentID) values ('Frankfurt', 'City', 209);
insert into Location (LocationName, LocationType, ParentID) values ('Madrid', 'City', 112);
insert into Location (LocationName, LocationType, ParentID) values ('Barcelona', 'City', 112);
insert into Location (LocationName, LocationType, ParentID) values ('Amsterdam', 'City', 113);
insert into Location (LocationName, LocationType, ParentID) values ('Istanbul', 'City', 114);
insert into Location (LocationName, LocationType, ParentID) values ('Dubai', 'City', 115);
insert into Location (LocationName, LocationType, ParentID) values ('Doha', 'City', 116);
insert into Location (LocationName, LocationType, ParentID) values ('Tokyo', 'City', 117);
insert into Location (LocationName, LocationType, ParentID) values ('Seoul', 'City', 118);
insert into Location (LocationName, LocationType, ParentID) values ('Guangzhou', 'City', 119);
insert into Location (LocationName, LocationType, ParentID) values ('Shenzhen', 'City', 119);
insert into Location (LocationName, LocationType, ParentID) values ('Chengdu', 'City', 119);
insert into Location (LocationName, LocationType, ParentID) values ('Beijing', 'City', 119);
insert into Location (LocationName, LocationType, ParentID) values ('Hong Kong', 'City', 119);
insert into Location (LocationName, LocationType, ParentID) values ('Sydney', 'City', 210);
insert into Location (LocationName, LocationType, ParentID) values ('Melbourne', 'City', 211);


insert into Airport values ('CGK', 'Soekarno-Hatta International Airport', '301');
insert into Airport values ('DPS', 'I Gusti Ngurah Rai International Airport', '302');
insert into Airport values ('BIA', 'Bandaranaike International Airport', '303');
insert into Airport values ('HRI', 'Mattala Rajapaksa International Airport', '304');
insert into Airport values ('DEL', 'Indira Gandhi International Airport', '305');
insert into Airport values ('BOM', 'Chhatrapati Shivaji Maharaj International Airport', '306');
insert into Airport values ('MAA', 'Chennai International Airport', '307');
insert into Airport values ('BKK', 'Suvarnabhumi Airport', '308');
insert into Airport values ('DMK', 'Don Mueang International Airport', '308');
insert into Airport values ('SIN', 'Singapore Changi Airport', '309');
insert into Airport values ('JFK', 'John F. Kennedy International Airport', '310');
insert into Airport values ('ORD', "Chicago O'Hare International Airport", '311');
insert into Airport values ('LAX', 'Los Angeles International Airport', '312');
insert into Airport values ('SFO', 'San Francisco International Airport', '313');
insert into Airport values ('MEX', 'Mexico City International Airport', '314');
insert into Airport values ('LHR', 'Heathrow Airport', '315');
insert into Airport values ('LGW', 'Londen Gatwick Airport', '315');
insert into Airport values ('CDG', 'Charles de Gaulle Airport', '316');
insert into Airport values ('ORY', 'Paris Orly Airport', '316');
insert into Airport values ('FCO', 'Leonardo daVinci-Fiumicino Airport', '317');
insert into Airport values ('MUC', 'Munich Franz Josef Strauss Airport', '318');
insert into Airport values ('FRA', 'Frankfurt Airport', '319');
insert into Airport values ('MAD', 'Adolfo Suarez Madrid-Barajas Airport', '320');
insert into Airport values ('BCN', 'Josep Tarradellas Barcelona-El Prat Airport', '321');
insert into Airport values ('AMS', 'Schiphol Amsterdam Airport', '322');
insert into Airport values ('IST', 'Istanbul Airport', '323');
insert into Airport values ('DXB', 'Dubai International Airport', '324');
insert into Airport values ('DOH', 'Hamad International Airport', '325');
insert into Airport values ('HND', 'Tokyo Haneda Airport', '326');
insert into Airport values ('ICN', 'Incheon International Airport', '327');
insert into Airport values ('CAN', 'Guangzhou Baiyun International Airport', '328');
insert into Airport values ('SZX', "Shenzen Bao'an International Airport", '329');
insert into Airport values ('CTU', 'Chengdu Shuangliu International Airport', '330');
insert into Airport values ('PEK', 'Beijing Capital International Airport', '331');
insert into Airport values ('HKG', 'Hong Kong International Airport', '332');
insert into Airport values ('SYD', 'Sydney Kingsford Smith Airport', '333');
insert into Airport values ('MEL', 'Melbourne Airport', '334');






insert into Routes values ('G-XLEE','BIA','MAA',2.5);
insert into Routes values ('N-WWBQ','SIN','DPS',2.5);
insert into Routes values ('F-EUPU','DEL','CGK',2.5);
insert into Routes values ('SX-BHR','BKK','SIN',2.5);
insert into Routes values ('LE-ATR','BOM','HRI',2.5);
insert into Routes values ('JA-MPE','DMK','MAA',2.5);
insert into Routes values ('F-EUPU','DPS','BKK',2.5);
insert into Routes values ('VH-AFU','CGK','DEL',2.5);
insert into Routes values ('HB-JBF','HRI','BOM',2.5);


insert into Flight values ('BA-555', 'G-XLEE', '2000-01-01 08:25:00', '2000-01-01 15:56:00');
insert into Flight values ('BA-181', 'N-WWBQ',  '2000-01-01 08:25:00', '2000-01-01 15:56:00');
insert into Flight values ('BA-821', 'F-EUPU',  '2000-01-01 08:25:00', '2000-01-01 15:56:00');
insert into Flight values ('BA-104', 'SX-BHR',  '2000-01-01 08:25:00', '2000-01-01 15:56:00');
insert into Flight values ('BA-777', 'LE-ATR',  '2000-01-01 08:25:00', '2000-01-01 15:56:00');
insert into Flight values ('BA-398', 'JA-MPE',  '2000-01-01 08:25:00', '2000-01-01 15:56:00');
insert into Flight values ('BA-433', 'F-EUPU',  '2000-01-01 08:25:00', '2000-01-01 15:56:00');
insert into Flight values ('BA-275', 'VH-AFU',  '2000-01-01 08:25:00', '2000-01-01 15:56:00');
insert into Flight values ('BA-867', 'HB-JBF',  '2000-01-01 08:25:00', '2000-01-01 15:56:00');
insert into Flight values ('BA-669', 'LE-ATR',  '2000-01-01 08:25:00', '2000-01-01 15:56:00');

insert into User values ('001', 'Sajeethiran', 'Sajeethiran', 'Sri Lanka', 'ABCD10001', '2000-01-01', 'Gold', '123456789', 'user1@gmail.com');
insert into User values ('002', 'Praveenasharma', 'Praveenasharma', 'Sri Lanka', 'ABCD10002', '2010-01-01', 'Guest', '123456789',  'user2@gmail.com');
insert into User values ('003', 'Indeera', 'Indeera', 'Sri Lanka', 'ABCD10003', '2010-01-01', 'Frequent', '123456789',  'user3@gmail.com');
insert into User values ('004', 'Sandali', 'Sandali', 'Sri Lanka', 'ABCD10004', '2000-01-01', 'Frequent', '123456789',  'user4@gmail.com');
insert into User values ('005', 'Kumudh', 'Kumudh', 'Sri Lanka', 'ABCD10005', '2000-01-01', 'Guest', '123456789',  'user5@gmail.com');

insert into Delay values ('301', 'BA-398', '2000-01-01 21:41:00');
insert into Delay values ('302', 'BA-181', '2000-01-01 21:41:00');
insert into Delay values ('303', 'BA-867', '2000-01-01 21:41:00');
insert into Delay values ('304', 'BA-433', '2000-01-01 21:41:00');
insert into Delay values ('305', 'BA-555', '2000-01-01 21:41:00');
insert into Delay values ('306', 'BA-777', '2000-01-01 21:41:00');

insert into Aircraft values ('G-XLEE', 'Boeing 737', '160');
insert into Aircraft values ('N-WWBQ', 'Boeing 737', '160');
insert into Aircraft values ('F-EUPU', 'Boeing 737', '160');
insert into Aircraft values ('SX-BHR', 'Boeing 757', '275');
insert into Aircraft values ('LE-ATR', 'Boeing 757', '275');
insert into Aircraft values ('JA-MPE', 'Boeing 757', '275');
insert into Aircraft values ('HB-JBF', 'Boeing 757', '275');
insert into Aircraft values ('VH-AFU', 'Airbus A380', '615');

insert into Seat values ('001', 'G-XLEE', '01', '01', TRUE);
insert into Seat values ('002', 'G-XLEE', '01', '02', TRUE);
insert into Seat values ('003', 'G-XLEE', '01', '03', FALSE);
insert into Seat values ('004', 'G-XLEE', '01', '04', TRUE);
insert into Seat values ('005', 'G-XLEE', '01', '05', TRUE);

insert into Booking values ('501', 'BA-555', '001', 'Economy', FALSE);
insert into Booking values ('502', 'BA-555', '002', 'Platinum', FALSE);
insert into Booking values ('503', 'BA-555', '003', 'Economy', TRUE);
insert into Booking values ('504', 'BA-555', '004', 'Business', FALSE);
insert into Booking values ('505', 'BA-555', '005', 'Business', TRUE);

insert into Ticket values ('001', '501', 'BA-555', '001', '0', '125.50');
insert into Ticket values ('002', '502', 'BA-555', '002', '5', '185.50');
insert into Ticket values ('003', '503', 'BA-555', '003', '5', '215.50');
insert into Ticket values ('004', '504', 'BA-555', '004', '0', '125.50');
insert into Ticket values ('005', '505', 'BA-555', '005', '9', '275.50');

insert into Payment values ('001', '501', '001', '2000-01-01 12:26:00');
insert into Payment values ('002', '502', '002', '2000-01-01 12:26:00');
insert into Payment values ('003', '503', '003', '2000-01-01 12:26:00');
insert into Payment values ('004', '504', '004', '2000-01-01 12:26:00');
insert into Payment values ('005', '505', '005', '2000-01-01 12:26:00');

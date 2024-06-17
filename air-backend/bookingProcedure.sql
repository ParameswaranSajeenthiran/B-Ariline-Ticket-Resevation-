
use finalbairline;

delimiter ||

create procedure booking (  in is_guest int , in userId int, in FirstName varchar(50) , in LastName varchar(50), in Nationality varchar(50),in PassportNumber varchar(50) ,in DateOfBirth date ,in ContactNumber1 varchar(20), in ContactNumber2 varchar(20),in EmailAddress varchar(50) , in FlightId int , in  seat_id int , in  PaymentStatus  tinyint(1) )
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
end

||
 delimiter 
 
 -- describe seat;
 call booking( 0,2, "procdure","name","sri lanka","3333","2020-02-01","03333333","3323232","psajendran@gmail.com",1,1475,0);


use finalbairline;

delimiter ||

create procedure createPassenger (in passengerType varchar(30) ,in userID int, in GuestID int )
 begin 

 if passengerType='Guest'
	then
	insert into Passenger ( PassengerType,UserID, GuestID ) values ("Guest",NULL,GuestID);
ELSE
	insert into Passenger ( PassengerType,UserID, GuestID ) values ("Registered",userID,NULL);   
end if;
end||
 delimiter 
 -- call ValidateBooking(15);

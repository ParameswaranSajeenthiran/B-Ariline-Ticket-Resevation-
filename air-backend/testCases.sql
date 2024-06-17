-- testing 
use finalBAirline;
select * from flight natural join route order by  DepartureDateTime ;
select * from passenger;
 show indexes from seat;
select * from   seat  where flightID=14 ;
select * from booking ;
select * from payment;
select * from registeredUser;
describe guest;
select * from guest;
use finalbairline;
select * from userBookingCount;
ALTER TABLE guest    
MODIFY ContactNumber1 varchar(20); 
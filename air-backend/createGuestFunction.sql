
use finalbairline;
describe guest;
delimiter ||

create procedure createGuest (in FirstName varchar(50) , in LastName varchar(50), in Nationality varchar(50),in PassportNumber varchar(50) ,in DateOfBirth date ,in ContactNumber1 varchar(20), in ContactNumber2 varchar(20),in EmailAddress varchar(50) )
 begin 

insert into Guest(FirstName,LastName, Nationality,PassportNumber ,DateOfBirth ,ContactNumber1,ContactNumber2, EmailAddress  ) values ( FirstName,LastName, Nationality,PassportNumber ,DateOfBirth ,ContactNumber1,ContactNumber2, EmailAddress);
end||
 delimiter 
call createGuest("name","name","sri lanka","3333","2020-02-01","03333333","3323232","psajendran@gmail.com");
select * from guest;

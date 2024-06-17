delimiter |
create trigger  updateUserType  after insert on Payment
for each row

begin
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
 

END;
delimiter;
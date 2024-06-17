delimiter |
create trigger  triggerWhenRegistering  after insert on registeredUser
for each row
begin
insert into UserBookingCount values (NEW.UserID,0);
end;
delimiter;
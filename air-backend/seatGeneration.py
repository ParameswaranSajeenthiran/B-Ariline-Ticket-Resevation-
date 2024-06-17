# Specify the number of rows you want to insert
flightId=525
platinumSeat=16
businessSeat=48
economySeat=96
# Open a text file for writing the SQL inserts
with open("seatinsert.sql", "a") as sql_file:

#platinum : 4 * 4
    for i in range(0, platinumSeat):
        # Define values for other columns
        column1_value = flightId  # Replace with your desired value
        column2_value = i // 4 + 1  # Replace with your desired value
        column3_value = i % 4 + 1  # Replace with your desired value
        column4_value = 1  # Replace with your desired value
        column5_value = "Platinum"  # Replace with your desired value

        # Create the SQL insert statement
        sql = "INSERT INTO Seat (FlightID, SeatID, RowN, ColumnN, Availability, TravelClass) VALUES (%s, %d, %s, %s, %s, '%s');"
        values = (column1_value, i,column2_value, column3_value, column4_value, column5_value)

        # Write the SQL insert to the file
        sql_file.write(sql % values + "\n")


#business : 8 * 6
    for i in range(platinumSeat,platinumSeat+ businessSeat):
        # Define values for other columns
        column1_value = flightId  # Replace with your desired value
        column2_value = i // 6 + 1  # Replace with your desired value
        column3_value = i % 6 + 1  # Replace with your desired value
        column4_value = 1  # Replace with your desired value
        column5_value = "Business"  # Replace with your desired value

        # Create the SQL insert statement
        sql = "INSERT INTO Seat (FlightID, SeatID, RowN, ColumnN, Availability, TravelClass) VALUES (%s, %d, %s, %s, %s, '%s');"
        values = (column1_value, i,column2_value, column3_value, column4_value, column5_value)
        # Write the SQL insert to the file
        sql_file.write(sql % values + "\n")


#economy : 12 * 8
    for i in range(platinumSeat+businessSeat,platinumSeat+ businessSeat+economySeat):
        # Define values for other columns
        column1_value = flightId  # Replace with your desired value
        column2_value = i // 8 + 1  # Replace with your desired value
        column3_value = i % 8 + 1  # Replace with your desired value
        column4_value = 1  # Replace with your desired value
        column5_value = "Economy"  # Replace with your desired value

        # Create the SQL insert statement
        sql = "INSERT INTO Seat (FlightID, SeatID, RowN, ColumnN, Availability, TravelClass) VALUES (%s, %d, %s, %s, %s, '%s');"
        values = (column1_value, i,column2_value, column3_value, column4_value, column5_value)

        # Write the SQL insert to the file
        sql_file.write(sql % values + "\n")

# Repeat the same process for other travel classes
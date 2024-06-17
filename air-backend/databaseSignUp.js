import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();


const pool=mysql.createPool({
    host: process.env.MYSQL_HOST, 
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE

}).promise();

//inserting into database
export async function createRegistrant(registrationDetails){ 
    const dateofBirth = new Date(registrationDetails.dateofBirth);
    const result = await pool.query('insert into registereduser (Username, Password, FirstName, LastName, Nationality, PassportNumber, UserType, DateOfBirth, ContactNumber1, contactNumber2, EmailAddress) values (?,?,?,?,?,?,?,?,?,?,?);',[registrationDetails.userName,registrationDetails.password, registrationDetails.firstName, registrationDetails.lastName, registrationDetails.country, registrationDetails.passportNumber, 'Frequent' , dateofBirth ,registrationDetails.number1, registrationDetails.number2, registrationDetails.email])
    console.log(result[0])
    return result[0];
}

//authentication (password checking)
export async function checkPasswordfromDB(loginDetails){
    try{
        console.log("in check password");
        const result = await pool.query('select * from registereduser where Username = ?',[loginDetails.username]);
        console.log(result)
        return result;
    }catch{

    }
}


export default pool;



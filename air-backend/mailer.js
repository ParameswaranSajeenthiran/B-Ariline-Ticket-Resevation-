

// import nodemailer
import nodemailer from "nodemailer";
   async function mailer(passengerDetails,flightDetails,seatDetails) {
// Async function enables allows handling of promises with await
    console.log("mailer",passengerDetails,flightDetails,seatDetails)
  // First, define send settings by creating a new transporter: 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: "psajeendran@gmail.com", // Your email address
      pass: "mfsr xdys kdhe gvss"
      //  For better security, use environment variables set on the server for these values when deploying
    },
  });
  
  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: 'psajeendran@gmail.com',
    to: passengerDetails.EmailAddress, // List of recipients
    subject: "Testing, testing, 123",
    html: `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
            }
            h1 {
                text-align: center;
                color: #333;
            }
            .ticket-info {
                margin-top: 20px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 10px;
            }
            th, td {
                padding: 10px;
                text-align: left;
            }
            th {
                background-color: #f2f2f2;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Airline Ticket</h1>
            <div class="ticket-info">
                <table>
                    <tr>
                        <th>From</th>
                        <td>${flightDetails.Origin}</td>
                    </tr>
                    <tr>
                        <th>To</th>
                        <td>${flightDetails.Destination}</td>
                    </tr>
                    <tr>
                        <th>Flight Number</th>
                        <td>${flightDetails.FlightNumber}</td>
                    </tr>
                    <tr>
                        <th>Departure Time</th>
                        <td>${flightDetails.DepartureDateTime}</td>
                    </tr>
                    <tr>
                        <th>Expected Arrival</th>
                        <td>${flightDetails.ArrivalDateTime}</td>
                    </tr>
                    <tr>
                        <th>Duration</th>
                        <td>${flightDetails.Duration}</td>
                    </tr>
                </table>
            </div>
            <h2>Passenger Details</h2>
            <div class="ticket-info">
                <table>
                    <tr>
                        <th>First Name</th>
                        <td>${passengerDetails.FirstName}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>${passengerDetails.LastName}</td>
                    </tr>
                    <tr>
                        <th>Passport Number</th>
                        <td>${passengerDetails.PassportNumber}</td>
                    </tr>
                    <tr>
                        <th>Contact Number 1</th>
                        <td>${passengerDetails.ContactNumber1}</td>
                    </tr>
                    <tr>
                        <th>Email Address</th>
                        <td>${passengerDetails.EmailAddress}</td>
                    </tr>
                    <tr>
                        <th>Contact Number 2</th>
                        <td></td>
                    </tr>
                </table>
            </div>
            <h2>Selected Seat</h2>
            <div class="ticket-info">
                <table>
                    <tr>
                        <th>Travel Class</th>
                        <td>${seatDetails.travelClass}</td>
                    </tr>
                    <tr>
                        <th>Seat Number</th>
                        <td>${seatDetails.seatNO}</td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
    </html>
    
    
    `,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

 export default mailer
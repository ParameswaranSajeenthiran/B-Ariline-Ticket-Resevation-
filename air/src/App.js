import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFlightInput from './components/SearchFlightInput';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import PassengerDetailsForm from './components/PassengerDetailsForm';
import SeatBooking from './components/seatBooking';
import ReviewAndPay from './components/ReviewAndPay';
import ReportGeneration from './components/ReportGeneration';
import SignIn from './components/LoginPage';
import SignUp from './components/SignUpPage';
import FlightStatus from './components/FlightStatus';


export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SearchFlightInput />} />
        <Route path="/reportGeneration" element={<ReportGeneration />} />
        <Route path="/passengerDetails" element={<PassengerDetailsForm />} />
        <Route path="/seatBooking" element={<SeatBooking />} />
        <Route path="/reviewAndPay" element={<ReviewAndPay />} />
        <Route path="/loginPage" element={<SignIn/>}/>
        <Route path="/signUpPage" element={<SignUp/>}/>
        <Route path="/flightStatus" element={<FlightStatus/>}/>

      
         
    
      </Routes>
    </BrowserRouter>
    </LocalizationProvider>

  );
}
// function App() {
//   return (
//     {/* <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> 
      
//   </div>*/}
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Layout />}/>
//       <Route index element={<Home />} />
   
    
//   </Routes>

//   </BrowserRouter>
//   );
// }

// export default App;

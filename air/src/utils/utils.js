export  default function isAdmin(){
    console.log("userName",localStorage.getItem("userName"))
    if(localStorage.getItem("userDetails")){
        let userDetails= JSON.parse(localStorage.getItem("userDetails"));

        console.log("userDetails",  JSON.parse(localStorage.getItem("userDetails")),userDetails.UserType=='Admin')

     return userDetails.UserType==='Admin'?true:false;
    }
     return false;
}

export  function isGuest(){
    if(localStorage.getItem("isGuest")){
        return JSON.parse(localStorage.getItem("isGuest"))
        
    }
     return false;
    
}

export function getUserType(){
    if(localStorage.getItem("userDetails")){
        let userDetails= JSON.parse(localStorage.getItem("userDetails"));
        return userDetails.UserType
    }
     return null;
}

export  function logout(){
    localStorage.removeItem("passengerDetails")
    localStorage.removeItem("userDetails")
    localStorage.removeItem('guestId')
    localStorage.removeItem("userName")
    localStorage.removeItem("isGuest")
}
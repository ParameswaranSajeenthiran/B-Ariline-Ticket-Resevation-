import jwt from 'jsonwebtoken'



function getCookie( cookie, key){
    var name = key + "=";
    var decodedCookie =cookie;
    console.log("decodedCookie",cookie)
    var ca = cookie.split(';');
    console.log("ca",ca)
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      console.log("c",c)
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
        console.log("c",c)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";



}

const requireAuth = (req,res,next) => {
    console.log("req",  req)
    console.log("req with cookie",  req.headers.cookie  )
    const token =getCookie( req.headers.cookie ,"jwt");
    if(token){
        jwt.verify(token,'bairline',(err,decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/login');
            }
            else{
                console.log(decodedToken);
                next();
            }
        })
    }
    else{
        res.redirect('/login');
    }
}

export default requireAuth
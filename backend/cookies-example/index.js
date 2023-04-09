const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const validateCookie = (req, res, cookieName, value) => {
  if(req.cookies[cookieName] === `${value}`){
    return res.send(`You already visit /set${cookieName}`) 
  } else {
    console.log(req.cookies)
    return res.send(`${cookieName} has been send successfully`)
  }
}

app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("hello", "World");
  res.send("Hello Laura");
});

app.get("/setcookiea", (req, res) => {
  res.cookie('cookieA', 'setCookieA',{
    secure: false,
    httpOnly: true,
    sameSite: 'lax'
  })

  validateCookie(req, res,'cookieA', 'setCookieA')
  
})

app.get('/deletecookiea', (req, res) => {
  res.clearCookie('cookieA')
  res.send('Cookie A has been deleted successfully');
});

app.get("/setcookieb", (req, res) => {
  res.cookie('cookieB', 'setCookieB',{
    secure: false,
    httpOnly: true,
    sameSite: 'lax'
  })

  validateCookie(req,res,'cookieB', 'setCookieB')
})

app.get("/setcookiec", (req, res) => {
  res.cookie('cookieC', 'setCookieC',{
    secure: false,
    httpOnly: true,
    sameSite: 'lax'
  })

  validateCookie(req,res,'cookieC', 'setCookieC')
})


//Visited endpoints
app.get("/getcookies", (req, res) => {
  let visitedEndpoints = Object.values(req.cookies)
  console.log(req.cookies)
  console.log(visitedEndpoints)
  if(visitedEndpoints.length > 0){
    res.send(`You have visited: ${visitedEndpoints}`);
  } else {
    res.send("You haven't visited any endpoint")
  }
  
});

app.listen(3000, () => console.log("Server listening on 3000"));

require("dotenv").config();

const express = require("express");
var session = require("express-session");

const { engine } = require('express-handlebars')

const routes = require("./routes");

const PORT = process.env.PORT ?? 3000;

//Initializations
const app = express();


//handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});


//Middlewares
app.use(
  session({
    name: "session_id",
    secret: process.env.SESSION_SECRET,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60, // 1min
    },
  })
);



//app.use("/", routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

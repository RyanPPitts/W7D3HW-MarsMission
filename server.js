
// DEPENDENCIES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const missions = require('./models/marsMission.js');
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul class="missions">

app.get("/mars-missions", (req, res) =>{
  res.render('index.ejs',{
    missions: missions
  });
  //res.send('hello world');
});

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
// individual missions 

app.get('/mars-missions/:index', function (req,res) {
//res.send(missions[req.params.index]);
res.render('show.ejs', {
  mission: missions[req.params.index]
    })
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Listing on port ${port}`)
});



// MODELS, VIEWS, CONTROLLERS

// MODELS HOLD DATA/CONNECT WITH DATABASE
// VIEWS SHOW STUFF TO THE USER HTML/CSS
// CONTROLLERS EXECUTE FUNCTIONS IN RESPONSE TO REQUESTS




// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

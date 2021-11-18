const chalk = require("chalk");
const { response } = require("express");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

router.use(jsonParser);

// REST API CRUD
router.get("/raspberry", function (request, response){
    console.log(request);
    response.json("LED On!");
   // response.send("Hi!");
    console.log(chalk.red("Led On!"));
});

router.get("/home", function(request, response){
    console.log(request);
    response.json("Welcome to Home!");
    console.log(chalk.red("Welcome Home!"));
})

router.post("/raspberry", (req, resp) => {
    resp.send(req.body);

    //Obtener datos del body (speed o ledIntensity)
    const {ledIntensity} = req.body;

    console.log(speed, ledIntensity);
    console.log(req.body);
    
})

module.exports = router;
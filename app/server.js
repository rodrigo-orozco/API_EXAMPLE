const chalk = require("chalk");
const { response } = require("express");
const express = require("express");
const myRouter = require("./routes/raspberry");

const PORT = 3000;
const URL = "http://localhost";
const app = express();

app.use(myRouter);

app.get("/", (req, res) => {
    response.json("Hello World");
})


app.listen(PORT, () => {
    console.log(chalk.green(`Server running at: http://localhost:${PORT}/`));
})
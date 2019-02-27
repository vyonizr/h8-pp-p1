// MAIN ROUTE INDEX FILE
const express = require("express")
const app = express()
const routes = require("./routes")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const indexRouter = require('./routes/index')

app.use("/", indexRouter);

app.listen(3000)
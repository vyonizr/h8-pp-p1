// MAIN ROUTE INDEX FILE
const express = require("express")
const app = express()
const routes = require("./routes")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('css'))

const indexRouter = require('./routes/index')
const loginRouter = require('./routes/loginRouter')
const signUpRouter = require('./routes/registerRouter')

app.use('/', indexRouter);
app.use('/login', loginRouter)
app.use('/register', signUpRouter)


app.listen(3000)
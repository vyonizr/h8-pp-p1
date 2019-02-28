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
const registerRouter = require('./routes/registerRouter')
const profileRouter = require('./routes/profileRouter')
const termsRouter = require('./routes/termsRouter')

app.use('/', indexRouter);
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/profile', profileRouter)
app.use('/terms', termsRouter)

app.listen(3000)
// MAIN ROUTE INDEX FILE
const express = require("express")
const app = express()
const routes = require("./routes")
const session = require('express-session')

const sess = {
  key: 'user_sid',
  secret: '343ji43j4n3jn4jk3n',
  cookie: {}
}
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('css'))
// app.use(session(sess))

const indexRouter = require('./routes/index')
const loginRouter = require('./routes/loginRouter')
const registerRouter = require('./routes/registerRouter')
const studioListRouter = require("./routes/studioListRouter")
const profileRouter = require("./routes/profileRouter")

app.use('/', indexRouter);
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use("/studios", studioListRouter)
app.use("/profile", profileRouter)

app.listen(3000)
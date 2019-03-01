// MAIN ROUTE INDEX FILE
const express = require("express")
const app = express()
const routes = require("./routes")
const session = require('express-session')
const port = process.env.PORT || 3000

const sess = { secret: 'keyboard cat', cookie: { maxAge: 60000 }}
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('css'))
app.use(session(sess))
console.log(session);

const indexRouter = require('./routes/index')
const loginRouter = require('./routes/loginRouter')
const registerRouter = require('./routes/registerRouter')
const studioListRouter = require("./routes/studioListRouter")
const profileRouter = require("./routes/profileRouter")
const termsRouter = require("./routes/termsRouter")

app.use('/', indexRouter);
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use("/studios", studioListRouter)
app.use("/profile", profileRouter)
app.use("/terms", termsRouter)

<<<<<<< HEAD
app.listen(3000)
module.exports = session
=======
app.listen(port, () => {
  console.log(`Server Starts on ${port}`)
})
>>>>>>> 6d5a4694766843b85305254bd49b79efbe2dd1d1

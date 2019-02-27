
class loginController {

  static getLoginPage(req, res) {
    res.render('../views/pages/login.ejs'), {
      message : 'login page'
    }
  }

}

module.exports = loginController
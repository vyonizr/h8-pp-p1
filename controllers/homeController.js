class HomeController {
    static getPage(req, res) {
        res.render('../views/pages/home.ejs'), {
            message : "EZjam Studio"
        }
    }
}

module.exports = HomeController
const authControllers = {
    login_get: (req, res) => {
        res.render("login","")
    },

    login_post: (req, res) => res.send("Route for login_post View"),
    register_get: (req, res) => res.render("register",""),
    register_post: (req, res) => res.send("Route for register_post View"),
    logout: (req, res) => res.send("Route for logout View"),
}

module.exports = authControllers;

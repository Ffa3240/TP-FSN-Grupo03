const authControllers = {
    login_get: (req, res) => res.send("Route for login_get View"),
    login_post: (req, res) => res.send("Route for login_post View"),
    register_get: (req, res) => res.send("Route for register_get View"),
    register_post: (req, res) => res.send("Route for register_post View"),
    logout: (req, res) => res.send("Route for logout View"),
}

module.exports = authControllers;

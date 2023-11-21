const shopControllers = {
    shop: (req, res) => res.send("Route for Shop View"),
    item: (req, res) => res.send(`Route for Item ${req.params.id} Shop View`),
    about: (req, res) => res.send("Route for About View"),
    faqs: (req, res) => res.send("Route for Faqs View")
}

module.exports = shopControllers;
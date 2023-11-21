const adminControllers = {
    admin: (req, res) => res.send("Route for admin View"),
    create_get: (req, res) => res.send(`Route for Item ${req.params.id} create_get admin View`),
    create_post: (req, res) => res.send(`Route for Item ${req.params.id} create_post admin View`),
    edit_get: (req, res) => res.send(`Route for edit_get item ${req.params.id} admin View`),
    edit_put: (req, res) => res.send(`Route for edit_put item ${req.params.id} admin View`),
    delete: (req, res) => res.send(`Route for delete item ${req.params.id} admin View`)
}

module.exports = adminControllers; 
const fs = require ("fs")
const licencesJSON = JSON.parse(fs.readFileSync("./data/licence.json","utf-8"))
const lanzamientosJSON = JSON.parse(fs.readFileSync("./data/lanzamiento.json","utf-8"))

const mainControllers = {
    home: (req, res) => {
        res.render("home", {licences:licencesJSON, sliderItems:lanzamientosJSON, sliderTitulo: "Ultimos Lanzamientos"})
    },
    contact: (req, res) => res.render("contact"),
    //about: (req, res) => res.send("Route for About View"),
    //faqs: (req, res) => res.send("Route for Faqs View")
}

module.exports = mainControllers;

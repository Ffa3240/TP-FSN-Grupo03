const fs = require ("fs")
const licencesJSON = JSON.parse(fs.readFileSync("./data/licence.json","utf-8"))
const productosJSON = JSON.parse(fs.readFileSync("./data/producto.json","utf-8"))
const sliderLanzamientosJSON = JSON.parse(fs.readFileSync("./data/sliderLanzamiento.json","utf-8"))

const mainControllers = {
    home: (req, res) => {
        let lanzamientos = sliderLanzamientosJSON.map(e => e.product_id)
        let sliderItems = []
        productosJSON.forEach(producto => {
            if (lanzamientos.includes(producto.product_id)) {
                sliderItems.push(producto)
            }
        });
        res.render("home", {licences:licencesJSON, sliderItems:sliderItems, sliderTitulo: "Ultimos Lanzamientos"})
    },
    contact: (req, res) => res.render("contact"),
    //about: (req, res) => res.send("Route for About View"),
    //faqs: (req, res) => res.send("Route for Faqs View")
}

module.exports = mainControllers;

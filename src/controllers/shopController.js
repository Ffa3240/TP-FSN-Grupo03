const fs = require ("fs")
const productosJSON = JSON.parse(fs.readFileSync("./data/producto.json","utf-8"))

const shopControllers = {
    shop: (req, res) => {
       let filtroCategoria = req.query.Cat 
        let filtroLicencia = req.query.Lic
        filtroCategoria = filtroCategoria==undefined ? "" : filtroCategoria;
        filtroLicencia = filtroLicencia==undefined ? "" : filtroLicencia;
        let filtro = {categoria: filtroCategoria, licencia: filtroLicencia}
        
        if (filtroCategoria == "" && filtroLicencia == "") {
            res.render("shop", {title:'Shop | FunkoShop', productos:productosJSON, filtro:filtro})
        }
        else {
            let productos = []
            productosJSON.forEach(producto => {
                if ((filtroCategoria=="" || producto.category_name == filtroCategoria) && 
                    (filtroLicencia=="" || producto.licence_name == filtroLicencia)) {
                    productos.push(producto)
                }
            })

                res.render("shop",  {title:'Shop | FunkoShop', productos:productos, filtro:filtro})
        }
      
    },
    item: (req, res) => {
        let productoBuscado = ""
        productosJSON.forEach(producto => {
            if (producto.product_id == req.params.id) {
                productoBuscado=producto;
            }
  
        })
      
        let sliderItems = []
        productosJSON.forEach(producto => {
            if (producto.category_name == productoBuscado.category_name || 
                producto.licence_name == productoBuscado.licence_name) {
                    sliderItems.push(producto)
            }
        })

        if (productoBuscado != "") {
            res.render("item", {title:'Item | FunkoShop', producto:productoBuscado, sliderItems:sliderItems, sliderTitulo: "PRODUCTOS RELACIONADOS"})
        }
    },
    
    about: (req, res) => res.send("Route for About View"),
    faqs: (req, res) => res.send("Route for Faqs View")
}

module.exports = shopControllers;
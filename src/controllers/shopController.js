const fs = require ("fs")
const productosJSON = JSON.parse(fs.readFileSync("./data/producto.json","utf-8"))

const shopControllers = {
    shop: (req, res) => {
      
        let filtroCategoria = req.query.Cat 
        let filtroLicencia = req.query.Lic
        let filtroOrden = req.query.Ord

        filtroOrden = filtroOrden==undefined ? "az" : filtroOrden;
        filtroCategoria = filtroCategoria==undefined ? "" : filtroCategoria;
        filtroLicencia = filtroLicencia==undefined ? "" : filtroLicencia;
      
        let filtro = {categoria: filtroCategoria, licencia: filtroLicencia, orden: filtroOrden}
   
        let productos = []
        if (filtroCategoria == "" && filtroLicencia == "") {
           productos = productosJSON
        }
        else {
            productosJSON.forEach(producto => {
                if ((filtroCategoria=="" || producto.category_name == filtroCategoria) && 
                    (filtroLicencia=="" || producto.licence_name == filtroLicencia)) {
                    productos.push(producto)
                }
            })
         }
        
        let productosOrdenados = []
        if (filtroOrden == "az") {
            productosOrdenados = productos.sort(function (a, b){
                    return a.product_name.localeCompare(b.product_name, 'es', { numeric: true })
                });
        }
        if (filtroOrden == "za") {
            productosOrdenados = productos.sort(function (b, a){
                    return a.product_name.localeCompare(b.product_name, 'es', { numeric: true })
                });
        }
        if (filtroOrden == "asc") {
            productosOrdenados = productos.sort(((a, b) => a.product_price - b.product_price))     
        }
        if (filtroOrden == "desc") {
            productosOrdenados = productos.sort(((a, b) => b.product_price - a.product_price))     
        }

        console.log("ordenados: " + productosOrdenados)


        res.render("shop",  {title:'Shop | FunkoShop', productos:productosOrdenados, filtro:filtro})
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
     cart: (req, res) => {
        res.render("carrito", {
          title: "Carrito",
          productos: productosJSON,
        });
    },
      addToCart: (req, res) => {
        const productId = req.body.productId;
        res.send(`Producto ${productId} agregado a tu carrito con éxito`);
    },
    
    about: (req, res) => res.send("Route for About View"),
    faqs: (req, res) => res.send("Route for Faqs View")
}

module.exports = shopControllers;

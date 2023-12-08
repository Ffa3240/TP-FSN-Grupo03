const fs = require("fs");
const productosJSON = JSON.parse(
  fs.readFileSync("./data/producto.json", "utf-8")
);
const relacionadosJSON = JSON.parse(
  fs.readFileSync("./data/relacionado.json", "utf-8")
);
const shopControllers = {
  shop: (req, res) => {
    res.render("shop", { productos: productosJSON });
  },
  item: (req, res) => {
    let productoBuscado = "";
    console.log(req.params.id);
    productosJSON.forEach((producto) => {
      if (producto.product_id == req.params.id) {
        productoBuscado = producto;
      }
    });
    if (productoBuscado != "") {
      res.render("item", {
        producto: productoBuscado,
        sliderItems: relacionadosJSON,
        sliderTitulo: "PRODUCTOS RELACIONADOS",
      });
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
  faqs: (req, res) => res.send("Route for Faqs View"),
};

module.exports = shopControllers;


var wHeader = document.getElementById("idHeader")
wHeader.innerHTML = `
<nav class="navbar container">
    <picture class="nabvar__logo">
        <a href="/index.html"><img src="https://res.cloudinary.com/db6uriqjm/image/upload/v1693183561/Codo%20a%20Codo/branding/logo_light_horizontal_bx6kzi.svg" alt="isologotipo de la marca FunkpoShop"></a>
    </picture>
    <ul class="navbar__menu">
        <li><a class="navbar__link" href="/pages/shop.html">VER TIENDA</a></li>
        <li><a class="navbar__link" href="/pages/Admin/admin.html">ADMIN</a></li>
        <li><a class="navbar__link" href="">SALIR</a></li>
    </ul>
</nav>
`
var wFooter = document.getElementById("idFooter")
wFooter.innerHTML = `
<section>
    <nav class="navbar container">
        <ul class="navbar__item">
            <li class="navbar__item">
                <a class="navbar__link" href="/pages/shop.html">SHOP</a></li>
            <li class="navbar__item">
                <a class="navbar__link" href="/pages/Admin/register.html">REGISTRARSE</a></li>
            <li class="navbar__item">
                <a class="navbar__link" href="/pages/Admin/login.html">LOGIN</a></li>
            <li class="navbar__item">
                <a class="navbar__link" href="/pages/contact.html">CONTACTO</a></li>
        </ul>

        <picture>
            <img src="https://res.cloudinary.com/db6uriqjm/image/upload/v1693183561/Codo%20a%20Codo/branding/isotype_zybtmc.svg" alt="Isotipo de la marca Funkoshop">
        </picture>
    </nav>
</section>
<p class="footer__copy">All rights reserved 2023 - Funkoshop &copy;</p>
`

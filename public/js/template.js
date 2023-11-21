
var wHeader = document.getElementById("idHeader")
wHeader.innerHTML = `
<nav class="navbar container">
<picture class="nabvar__logo">
    <a href="/index.html"><img src="https://res.cloudinary.com/db6uriqjm/image/upload/v1693183561/Codo%20a%20Codo/branding/logo_light_horizontal_bx6kzi.svg" alt="isologotipo de la marca FunkpoShop"></a>
</picture>
<ul class="navbar__menu">
    <li class="navbar__item with-submenu">
        <a class="navbar__link with-icon" href="./pages/shop.html">SHOP
            <iconify-icon icon="tabler:chevron-down" style="color: white;"></iconify-icon>
        </a>
        <ul class="submenu">
        <li class="submenu__item">
            <a href="" class="submenu__link">Funkos</a>
        </li>
        <li class="submenu__item">
            <a href="" class="submenu__link">Remeras</a>
        </li>
        <li class="submenu__item">
            <a href="" class="submenu__link">LLaveros</a>
        </li>
    </ul>

    </li>
    <li><a class="navbar__link" href="/pages/contact.html">CONTACTO</a></li>
    <li><a class="navbar__link" href="/pages/login.html">LOGIN</a></li>
    <li class="navbar__item">
        <a class="navbar__cart" href="/pages/carrito.html">
            <img src="https://res.cloudinary.com/db6uriqjm/image/upload/v1693183785/Codo%20a%20Codo/icons/cart-icon_dgq3n7.svg" alt="icono de carrito" />
        </a>
    </li>
</ul>
</nav>
`
var wFooter = document.getElementById("idFooter")
wFooter.innerHTML = `
        <section>
            <nav class="navbar container">
                <ul class="navbar__item">
                    <li class="navbar__item">
                        <a class="navbar__link" href="/TP-FSN-Grupo03/pages/shop.html">SHOP</a></li>
                    <li class="navbar__item">
                        <a class="navbar__link" href="/TP-FSN-Grupo03/pages/admin/register.html">REGISTRARSE</a></li>
                    <li class="navbar__item">
                        <a class="navbar__link" href="/TP-FSN-Grupo03/pages/admin/login.html">LOGIN</a></li>
                    <li class="navbar__item">
                        <a class="navbar__link" href="/TP-FSN-Grupo03/pages/contact.html">CONTACTO</a></li>
                </ul>

                <picture>
                    <img src="https://res.cloudinary.com/db6uriqjm/image/upload/v1693183561/Codo%20a%20Codo/branding/isotype_zybtmc.svg" alt="Isotipo de la marca Funkoshop">
                </picture>
            </nav>
        </section>
        <p class="footer__copy">All rights reserved 2023 - Funkoshop &copy;</p>
`

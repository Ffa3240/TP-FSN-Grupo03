function ordenar(e) {
    location.href = "/Shop/?Ord=" + e.value
}

function filtrar() {
    let chkNews = document.getElementById("news")
    let chkOffers = document.getElementById("offers")
    let chkSpecials = document.getElementById("specials")
    let chkFavs = document.getElementById("favs")
    let search = document.getElementById("search")
    let impMin = document.getElementById("min")
    let impMax = document.getElementById("max")
    if (impMin.value > 0 && impMax.value > 0 && (impMin.value > impMax.value)) {
        impMax.value = impMin.value
    }


    Array.from(document.querySelectorAll('.shop__item')).forEach(
        (el) => el.classList.remove('shop__item__hide'));


    Array.from(document.querySelectorAll('.shop__item')).forEach(
        (el) => {
            if (chkNews.checked || chkOffers.checked || chkSpecials.checked || chkFavs.checked) {
                if (
                    chkNews.checked && el.classList.contains('filter_new') ||
                    chkOffers.checked && el.classList.contains('filter_sale') ||
                    chkSpecials.checked && el.classList.contains('filter_special_edition') ||
                    chkFavs.checked && el.classList.contains('filter_favorite')
                ) { }
                else {
                    el.classList.add('shop__item__hide');
                }
            }
            if ((impMax.value > 0 && el.value > impMax.value) || (impMin.value > 0 && el.value < impMin.value)) {
                el.classList.add('shop__item__hide');
            }
            if (search.value != "") {
                let cardCatLic = el.childNodes[1].childNodes[1].childNodes[3].childNodes[1].innerText
                let cardNombre = el.childNodes[1].childNodes[1].childNodes[3].childNodes[3].innerText
                if (!cardNombre.toUpperCase().includes(search.value.toUpperCase())
                    && !cardCatLic.toUpperCase().includes(search.value.toUpperCase())) {
                    el.classList.add('shop__item__hide');
                    el.classList.add('pagination_hide');
                }
            }
        });

}



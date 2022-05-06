/* ALL THE EVENTS */
const $search = document.getElementById("search");
const $login = document.getElementById("login");
const $products = document.getElementById("products");

$products.addEventListener(
    "load",
    getProducts()
)

$search.addEventListener(
    'click',
    getSearch()
)

$login.addEventListener(
    "click",
    login()
)

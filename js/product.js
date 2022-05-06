function getProduct() {
    const url_controller = "http://localhost:8080/WebServiceCoffeelan";
    const clase_java_controller = "/Controller";

    /* CÁPSULA DE CÓDIGO QUE VA A HABLAR CON EL CONTROLLER */
    $.ajax(
        {
            url: url_controller + clase_java_controller,
            data:"ACTION=PRODUCT.FIND_ALL",
            type: 'GET',
            dataType: 'text',
            success: function (responseText) {
                let html = '<div class="container">';
                let num = parseInt(responseText.substring(responseText.indexOf("]") + 1, responseText.length));

                for (let i = 0; i < num; i++) {
                    html += '<div class="product">';
                        html += '<div class="product-card">';
                            html += '<h2 class="name">' + responseText.substring(responseText.indexOf("NAME") + 7, responseText.indexOf("DESCRIPTION") - 3) + '</h2>';
                            html += '<span class="price">' + responseText.substring(responseText.indexOf("PRICE") + 7, responseText.indexOf("IMG") - 2) + ' €</span>';
                            html += '<a class="popup-btn">Quick View</a>';
                            html += '<img src="' + responseText.substring(responseText.indexOf("IMG") + 5, responseText.indexOf("}")) + '" class="product-img" alt="">';
                        html += '</div>';

                        html += '<div class="popup-view">';
                            html += '<div class="popup-card">';
                                html += '<a><i class="fas fa-times close-btn"></i></a>';
                                html += '<div class="product-img2">';
                                    html += '<img src="' + responseText.substring(responseText.indexOf("IMG") + 5, responseText.indexOf("}")) + '" alt="">';
                                html += '</div>';
                                html += '<div class="info">';
                                    html += '<h2>' + responseText.substring(responseText.indexOf("NAME") + 7, responseText.indexOf("DESCRIPTION") - 3) + '<br>';
                                    html += /*'<span>Mens Sport</span>'+*/'</h2>';
                                    html += '<p>' + responseText.substring(responseText.indexOf("DESCRIPTION") + 14, responseText.indexOf("STOCK") - 3) + '</p>';
                                    html += '<span class="price2">' + responseText.substring(responseText.indexOf("PRICE") + 7, responseText.indexOf("IMG") - 2) + ' €</span>';
                                    html += '<a href="amazon.com" class="add-cart-btn">Add to Cart</a>';
                                    html += '<a href="#" class="add-wish">Add to Wishlist</a>';
                                html += '</div>';
                            html += '</div>';
                        html += '</div>';
                    html += '</div>';
                    responseText = responseText.substring(responseText.indexOf("}") + 1, responseText.length);
                }

                html += '</div>';
                $('#body').html(html);
            },
            error: function (xhr, textStatus, errorThrown) { }
        }
    );
    /* FIN */
}

var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

//javascript for quick view button
function popup(popupClick){
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
        popup(i);
    });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        });
    });
});
function acceptance() {
    let companyName = $('[name="shippingCompany"]').val();
    let productName = $('[name="productName"]').val();
    let quantity = +$('[name="productQuantity"]').val();
    let scrape = +$('[name="productScrape"]').val();
    if (validInput() && filled()) {
        let productQuantity = 0;
        if (quantity > scrape) {
            productQuantity = quantity - scrape;
            let textContent = `[${companyName}] ${productName} - ${productQuantity} pieces`;
            addContainer(textContent);
            reset();
        }
    }

    function validInput() {
        return companyName !== '' && productName !== '' && !isNaN(quantity) && !isNaN(scrape);
    }

    function filled() {
        return companyName !== '' && productName !== '' && quantity !== 0 && scrape !== 0;
    }

    function addContainer(textContent) {
        let div = $('<div>');
        let p = $('<p>').text(textContent);
        let button = $('<button>').attr('type', 'button').text('Out of stock');
        button.on('click', function () {
            $(this).parent().remove();
        });
        div.append(p, button);
        $('#warehouse').append(div);

    }

    function reset() {
        $('[name="shippingCompany"]').val('');
        $('[name="productName"]').val('');
        $('[name="productQuantity"]').val('');
        $('[name="productScrape"]').val('');
    }
}
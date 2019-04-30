function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let totalPrice = 0;
    let totalCapacity = 0;
    let button = $('#submit');
    let productField = $('.custom-select');
    let productPrice = $('#price');
    let productQuantity = $('#quantity');
    let priceField = $('#sum');
    let capacityField = $('#capacity');

    productField.on('input', onInput);
    button.on('click', submit);

    function submit() {
        let product = productField.val();
        let price = productPrice.val();
        let quantity = +productQuantity.val();
        totalCapacity += +quantity;
        if (totalCapacity < 150) {
            totalPrice += +price;
            let li = $('<li>');
            let result = `Product: ${product} Price: ${price} Quantity: ${quantity}`;
            li.text(result);
            $('.display').append(li);
            priceField.val(totalPrice);
            capacityField.val(totalCapacity);
        } else {
            disableSubmissions();
        }
        reset();
    }


    function reset() {
        productField.val('');
        productPrice.val('1');
        productQuantity.val('1');
        button.attr('disabled', true);
    }

    function disableSubmissions() {
        productField.attr('disabled', true);
        productPrice.attr('disabled', true);
        productQuantity.attr('disabled', true);
        capacityField.val('full');
        capacityField.addClass('fullCapacity');
    }

    function onInput() {
        let disabled = $(this).val() === '';
        button.attr('disabled', disabled);
    }
}

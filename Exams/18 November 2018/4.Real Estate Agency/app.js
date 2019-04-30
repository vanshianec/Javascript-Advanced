function realEstateAgency() {
    let agencyPrice = 0;
    $('[name="regOffer"]').on('click', function () {
        let notification = $('#notification');
        let text = '';
        if (validInput()) {
            text = 'Your offer was created successfully.';
            addContainer();
        } else {
            text = 'Your offer registration went wrong, try again.';
        }
        notification.append($('<p>').attr('id', 'message'));
        $('#message').text(text);
        clear();
    });

    $('[name="findOffer"]').on('click', function () {
        if (validSearch()) {
            let type = $('[name="familyApartmentType"]').val();
            let budget = +$('[name="familyBudget"]').val();
            let familyName = $('[name="familyName"]').val();
            let paragraphs = $(`.apartment p:nth-child(2):contains(${type})`);
            let found = false;
            if (paragraphs.length !== 0) {
                paragraphs.each(function () {
                    let currentPrice = +$(this).parent().children().eq(0).text().split(": ")[1];
                    let currentCommission = +$(this).parent().children().eq(2).text().split(": ")[1];
                    let requiredPrice = currentPrice + currentPrice * currentCommission / 100;
                    if (budget >= requiredPrice) {
                        agencyPrice += (currentPrice * currentCommission / 100) * 2;
                        let father = $(this).parent();
                        father.children().remove();
                        father.attr('style', 'border: 2px solid red;');
                        let button = $('<button>').text('MoveOut');
                        button.on('click', function () {
                            $(this).closest('div').remove();
                            $('#message').text(`They had found cockroaches in ${familyName}'s apartment`)
                        });
                        father.append($('<p>').text(`${familyName}`), $('<p>').text('live here now'), button);
                        $('#roof h1').text(`Agency profit: ${agencyPrice} lv.`);
                        $('#message').text('Enjoy your new home! :))');
                        found = true;
                        return false;
                    }
                });
                if (!found) {
                    $('#message').text('We were unable to find you a home, so sorry :(');
                }
            } else {
                $('#message').text('We were unable to find you a home, so sorry :(');
            }
        } else {
            $('#message').text('We were unable to find you a home, so sorry :(');
        }
        clearSearch();
    });

    function validSearch() {
        return +$('[name="familyBudget"]').val() > 0
            && $('[name="familyApartmentType"]').val() !== ''
            && $('[name="familyName"]').val() !== '';
    }

    function clearSearch() {
        $('[name="familyBudget"]').val('');
        $('[name="familyApartmentType"]').val('');
        $('[name="familyName"]').val('');
    }

    function validInput() {
        return +$('[name="apartmentRent"]').val() > 0
            && $('[name="agencyCommission"]').val() !== ''
            && (+$('[name="agencyCommission"]').val() >= 0 && +$('[name="agencyCommission"]').val() <= 100)
            && ($('[name="apartmentType"]').val() !== 0 && !$('[name="apartmentType"]').val().includes(':'))
    }

    function addContainer() {
        let div = $('<div>').addClass('apartment');
        let rentText = `Rent: ${$('[name="apartmentRent"]').val()}`;
        let typeText = `Type: ${$('[name="apartmentType"]').val()}`;
        let commissionText = `Commission: ${$('[name="agencyCommission"]').val()}`;

        div.append($('<p>').text(rentText), $('<p>').text(typeText), $('<p>').text(commissionText));
        $('#building').append(div);
    }

    function clear() {
        $('[name="apartmentRent"]').val('');
        $('[name="apartmentType"]').val('');
        $('[name="agencyCommission"]').val('');
    }

}
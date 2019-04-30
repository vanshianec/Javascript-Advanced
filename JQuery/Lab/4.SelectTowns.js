function attachEvents() {
    $('#items li').on('click', function () {
        if ($(this).attr('data-selected')) {
            $(this).removeAttr('data-selected');
            $(this).css('background-color', '');
        } else {
            $(this).attr('data-selected', 'true');
            $(this).css('background-color', '#DDD');
        }
    });
    $('#showTownsButton').on('click', function () {
        let selectedLi = $('#items li[data-selected=true]');
        let result = selectedLi.toArray().map(li => li.textContent).join(', ');
        $('#selectedTowns').text(result).css('font-color', '#000');
    });
}
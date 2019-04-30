function addSticker() {
    let title = $('.title');
    let text = $('.content');
    if (title.val() !== '' && text.val() !== '') {
        let li = $('<li>').addClass('note-content');
        let a = $('<a>').addClass('button').text('x');
        a.on('click', removeNode);
        let h2 = $('<h2>').text(title.val());
        let hr = $('<hr>');
        let p = $('<p>').text(text.val());
        li.append(a, h2, hr, p);
        $('#sticker-list').append(li);
        title.val('');
        text.val('');
    }

    function removeNode() {
        $(this).parents('.note-content').remove();
    }
}
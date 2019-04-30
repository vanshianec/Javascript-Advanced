function search() {
    let matchedTowns = $(`#towns li:contains('${$('#searchText').val()}')`);
    matchedTowns.css('font-weight', 'bold');
    $('#result').text(`${matchedTowns.length} matches found`);
}
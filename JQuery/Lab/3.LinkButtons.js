function attachEvents() {
    $("a.button").on("click", addUniqueClass);

    function addUniqueClass() {
        $('.selected').removeClass("selected");
        $(this).addClass("selected");
    }
}
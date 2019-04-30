function validate() {
    let emailPattern = /^[a-z]+@[a-z]+(\.[a-z]+)+$/g;
    document.getElementById('email').addEventListener('change', function (event) {
        if (!emailPattern.test(event.target.value)) {
            event.target.className = 'error';
        } else {
            event.target.className = '';
        }
    })

}
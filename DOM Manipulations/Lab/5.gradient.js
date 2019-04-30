function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    gradient.addEventListener('mousemove', mouseOut);
    gradient.addEventListener('mouseout', mouseIn);

    function mouseOut(event) {
        let result = event.offsetX / (event.target.clientWidth - 1);
        result = Math.trunc(result * 100);
        document.getElementById('result').textContent = result + "%";
    }

    function mouseIn() {
        document.getElementById('result').textContent = "";
    }
}
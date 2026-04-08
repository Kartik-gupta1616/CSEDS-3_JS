function startTimer() {
    let n = document.getElementById("num").value;
    let display = document.getElementById("result");

    n = parseInt(n);

    if (isNaN(n) || n <= 0) {
        display.innerHTML = "Enter valid number";
        return;
    }

    display.innerHTML = n;

    let timer = setInterval(function () {
        n--;

        if (n >= 1) {
            display.innerHTML = n;
        } else {
            display.innerHTML = "Done!";
            clearInterval(timer);
        }
    }, 1000);
}
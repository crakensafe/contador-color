const btns = document.querySelectorAll(".button");
const value = document.querySelector("#value");


//inicial counter
let count = 0;

//funtion counter
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        };
        value.textContent = count;
    });
});
const score = document.getElementById("resultScore");
score.innerText = "0";
const updateCounter = () => {
    const target = score.getAttribute("data-target");
    const c = +score.innerText;
    const increment = target/200;
    if (c < target) {
        score.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
    }
}
updateCounter();

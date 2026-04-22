function orderWaffl() {
    const container = document.getElementById("plate");

    const waffl = document.createElement("div");
    waffl.className = "waffl";
    waffl.textContent = "Waffl";

    container.appendChild(waffl);

    orderCount ++;

    const counter = document.getElementById("orderCounter");
    counter.innerHTML = orderCount;
}
function eatWaffl() {
    const container = document.getElementById("plate");

    if (container.lastElementChild != null) {
        container.removeChild(container.lastElementChild);

        eatenCount ++;
    }

    const counter = document.getElementById("eatenCounter");
    counter.innerHTML = eatenCount;
}

const orderButton = document.getElementById("orderButton");
const eatButton = document.getElementById("eatButton");

let orderCount = 0;
let eatenCount = 0;

orderButton.addEventListener("click", orderWaffl);
eatButton.addEventListener("click", eatWaffl);
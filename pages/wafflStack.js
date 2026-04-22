function orderWaffl() {
    const container = document.getElementById("plate");

    const waffl = document.createElement("div");
    waffl.className = "waffl";
    waffl.textContent = "Waffl";

    container.appendChild(waffl);
}
function eatWaffl() {
    const container = document.getElementById("plate");

    if (container.lastElementChild != null) {
        container.removeChild(lastElementChild);
    }
}

const orderButton = document.getElementById("orderButton");
const eatButton = document.getElementById("eatButton");

orderButton.addEventListener("click", orderWaffl);
eatButton.addEventListener("click", eatWaffl);
const boxCount = 26;
const boxes = document.querySelector(".boxes");
const dealButton = document.getElementById("dealButton");
const boxCountElement = document.getElementById("boxCount");

const amounts = [
  0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000,
  5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000,
  500000, 750000, 1000000
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createBoxes() {
  shuffleArray(amounts); // Para değerlerini karıştır

  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = i + 1;
    box.dataset.amount = amounts[i];
    boxes.appendChild(box);

    box.addEventListener("click", () => {
      const amount = parseFloat(box.dataset.amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
      box.innerText = amount;
      box.style.backgroundColor = "#e0e0e0";
      box.style.cursor = "default";
      box.removeEventListener("click", onClickBox);
    });
  }
}

createBoxes();

dealButton.addEventListener("click", () => {
  boxes.innerHTML = "";
  boxCountElement.innerText = "1";
});

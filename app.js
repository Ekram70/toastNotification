const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "message one",
  "message two",
  "message three",
  "message four",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(getRandom(types));
  toast.innerText = getRandom(messages);

  toasts.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 1500);
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const container = document.querySelector("#wave-text");
const text = container.textContent;
container.innerHTML = "";

text.split("").forEach((char,index) => {
  const span = document.createElement("span");
  span.classList.add("wave-char");
  span.textContent = char;
  setTimeout(() => {
    container.appendChild(span);
  }, 100 * index);
});

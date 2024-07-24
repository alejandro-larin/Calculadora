const button_clear = document.getElementById("button_clear"),
  button_delete = document.getElementById("button_delete");

button_clear.addEventListener("click", () => {
  windows.value = "";
});

button_delete.addEventListener("click", () => {
  let current = windows.value;
  if (current.length > 0) {
    windows.value = current.slice(0, -1);
  }
});

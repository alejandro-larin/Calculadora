const windows = document.getElementById("window");
const button_equal = document.getElementById("button_equal");

button_equal.addEventListener("click", () => {
  try {
    windows.value = eval(windows.value);
  } catch (error) {
    if (error instanceof SyntaxError) {
      windows.value = "Error Sintaxys";
      setTimeout(() => {
        windows.value = "";
      }, 500);
    } else {
      windows.value = error.message;
      setTimeout(() => {
        windows.value = "";
      }, 500);
    }
  }
});

const arrayOperator = ["add", "substract", "divide", "multiply"];
for (let index = 0; index < 10; index++) {
  const button = document.getElementById(`button_${index}`);
  button.addEventListener("click", () => {
    windows.value += button.value;
  });
}

for (let j = 0; j < 4; j++) {
  const buttonOperator = document.getElementById(`button_${arrayOperator[j]}`);
  buttonOperator.addEventListener("click", () => {
    windows.value += buttonOperator.value;
  });
}

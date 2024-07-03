(() => {
  let num1 = document.querySelector(".num1");
  let num2 = document.querySelector(".num2");
  let num3 = document.querySelector(".num3");
  let op = document.querySelector(".op");

  let numBtns = document.querySelectorAll("[data-number]");
  let opBtns = document.querySelectorAll("[data-operation]");
  let equalBtns = document.querySelector("[data-equals]");
  let delBtns = document.querySelector("[data-delete]");

  numBtns.forEach((numBtn, idx) => {
    numBtn.addEventListener("click", (e) => {
      if (op.textContent === "") {
        num1.textContent += e.currentTarget.textContent;
      } else {
        num2.textContent += e.currentTarget.textContent;
      }
    });
  });
  opBtns.forEach((opBtn, idx) => {
    opBtn.addEventListener("click", (e) => {
      op.textContent = e.currentTarget.textContent;
    });
  });
  equalBtns.addEventListener("click", (e) => {
    const calc = (x, y) => {
      let result = null;
      x = Number(x);
      y = Number(y);
      if (isNaN(x) || isNaN(y)) return;

      switch (op.textContent) {
        case "+":
          result = x + y;
          break;
        case "-":
          result = x - y;
          break;
        case "*":
          result = x * y;
          break;
        case "/":
          result = x / y;
          break;
        case "%":
          result = x % y;
          break;

        default:
          break;
      }

      return result;
    };
    num3.textContent = calc(num1.textContent, num2.textContent);
    console.log();
  });

  delBtns.addEventListener("click", (e) => {
    num1.textContent = "";
    num2.textContent = "";
    num3.textContent = "";
    op.textContent = "";
  });
})();

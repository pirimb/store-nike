let counter;

window.addEventListener("click", (e) => {
  if (
    e.target.dataset.action === "plus" ||
    e.target.dataset.action === "minus"
  ) {
    const counterWrapper = e.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (e.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (e.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1)
      counter.innerText = --counter.innerText;
  }
});

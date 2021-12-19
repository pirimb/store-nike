function calcTotalPrice() {
  const cartItems = document.querySelectorAll(".cart-card");

  const totalPriceBox = document.querySelector(".totalPrice");

  let totalPrice = 0;

  cartItems.forEach((item) => {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".cart-item_price");

    const currentELPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

    totalPrice += currentELPrice;
  });
  totalPriceBox.innerText = totalPrice;
}

const cartContainer = document.querySelector(".cart-container2");

window.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-cart")) {
    const card = e.target.closest(".card");

    const productinfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector("img").getAttribute("src"),
      title: card.querySelector("h2").innerText,
      price: card.querySelector(".product-price_number").innerText,
      count: card.querySelector("[data-counter]").innerText,
    };

    const isItemInCart = cartContainer.querySelector(
      `[data-id="${productinfo.id}"]`
    );

    if (isItemInCart) {
      const countOfElement = isItemInCart.querySelector("[data-counter]");
      countOfElement.innerText =
        parseInt(countOfElement.innerText) + parseInt(productinfo.count);
    } else {
      const cartItemHTML = `<div class="cart-card" data-id="${productinfo.id}">
        <div class="cart-item_img">
            <img src="${productinfo.imgSrc}">
        </div>
        <div class="cart-item_info">
            <p>${productinfo.title}</p>
            <div class="cart-item_price_block">
                <div>Price:  USD</div>            
                <div class="cart-item_price">
                    ${productinfo.price}
                </div>
            </div>
            <div class="count">
                
            <div>Amount: </div> <div data-counter="">${productinfo.count}</div> 
               
            </div>
        </div>
        <hr>
    </div>`;

      cartContainer.insertAdjacentHTML("beforeend", cartItemHTML);
    }

    card.querySelector("[data-counter]").innerText = "1";

    calcTotalPrice();
  }
});

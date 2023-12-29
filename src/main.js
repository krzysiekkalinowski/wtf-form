const holder = document.querySelector(".form-quantity__quantity-holder--js");
holder.textContent = quantity.value;

quantity.addEventListener("input", () => {
    const holder = document.querySelector(".form-quantity__quantity-holder--js");
    holder.textContent = quantity.value;
});
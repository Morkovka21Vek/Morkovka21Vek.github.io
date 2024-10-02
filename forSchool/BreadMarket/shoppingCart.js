document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll(".addToShoppingCart").forEach((button) => {
    button.addEventListener("click", function () {
      const productName = button.parentNode.parentNode.id;
      alert(`${productName} добавлено в корзину!`);
    });
  });

  document.querySelector(".ShoppingCartBut").addEventListener("click", function () {
    document.querySelector(".ShoppingCartMenu").style = "opacity: 1; transform: translate(-50%, -50%)";
    // document.body.style.overflowY = "hidden";
  });
});
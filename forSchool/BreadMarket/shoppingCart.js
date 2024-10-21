  document.querySelectorAll('.addToShoppingCart').forEach(button => {
    button.addEventListener('click', function() {
      const productName = button.parentNode.parentNode.id;
      alert(`${productName} добавлено в корзину!`);
    });
  });


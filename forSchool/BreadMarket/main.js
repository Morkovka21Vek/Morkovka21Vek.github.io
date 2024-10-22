document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector(".container");
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://gist.githubusercontent.com/Morkovka21Vek/e08485da0c9de11892ec5b9e2a7016bf/raw/ce4c41dc1a43ae8e3b3120a77062b0116b3c3c82/testForSchoolBreadShop.json"
  );
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200) {
      var json = JSON.parse(xhr.response);
      console.log(json.categories);

      json.categories.forEach((category) => {
        let categoryDiv = document.createElement("div");
        categoryDiv.className = "category";
        categoryDiv.id = category.id;

        let categoryName = document.createElement("div");
        categoryName.className = "categoryName";
        categoryName.innerText = category.name;
        categoryDiv.append(categoryName);

        category.products.forEach((product) => {
          let productDiv = document.createElement("div");
          productDiv.className = "product";
          productDiv.id = product.id;

          let productText = document.createElement("div");
          productText.className = "text";

          if (product.price !== "") product.price = "<br>" + product.price;
          if (product.yellowText !== "")
            product.yellowText =
              '<br><p class="yellowText">' + product.yellowText + "</p>";
          if (product.redText !== "")
            product.redText =
              '<br><p class="redText">' + product.redText + "</p>";
          productText.innerHTML = `${product.text}${product.price}${product.yellowText}${product.redText}`;
          productDiv.append(productText);

          product.imgs.forEach((imgSrc) => {
            let productImg = document.createElement("img");
            productImg.src = imgSrc;
            productDiv.append(productImg);
          });

          categoryDiv.append(productDiv);
        });

        container.append(categoryDiv);

        let buttonsElem = document.querySelector(".buttons");
        json.navigationButtons.forEach((button) => {
          let buttonElement = document.createElement("button");
          buttonElement.innerText = button.text;
          buttonElement.title = button.id;
          buttonElement.addEventListener("click", function () {
            document.getElementById(this.title).scrollIntoView({
              behavior: "smooth",
            });
          });

          buttonsElem.append(buttonElement);
        });
      });
    }
  };

  xhr.onerror = function () {
    console.error("Connection error");
  };
});

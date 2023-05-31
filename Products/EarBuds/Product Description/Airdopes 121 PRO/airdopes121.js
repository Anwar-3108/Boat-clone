let productArray = []
creating(productArray);
function creating(productArray) {
    let obj = {
        id:3,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
        cartImage: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_916612cd-a8da-408e-8ec6-b177df5fa727_1_800x.png?v=1658150489",
        name: "boAt Airdopes 121 PRO ",
        price: 1499,
        strikedoff: 6900,
        discount: "80% off",
        rating: 4.6,
    }

    productArray.push(obj);
    display(productArray);
  }
  
  function display(productArray) {
    productArray.forEach(function (elem) {
      let div = document.createElement("div");
  
      let detailBox = document.createElement("div");
      detailBox.className = "detailbox";
      let name = document.createElement("h2");
      name.textContent = elem.name + "|";
      let details = document.createElement("span");
      details.setAttribute("class", "descriptiontext");
      details.textContent =
        " Wireless Earbuds with 10mm Dynamic Drivers, ASAP™️ Charge, ENx™️ Technology, Easy Touch Control";
      name.appendChild(details);
      let rating = document.createElement("p");
      rating.setAttribute("class", "rating");
  
      let starIcon = document.createElement("span");
      starIcon.textContent = "★";
      rating.appendChild(starIcon);
      rating.textContent += " " + elem.rating;
  
      let reviews = document.createElement("span");
      reviews.setAttribute("class", "reviews");
      reviews.textContent = "40 reviews";
  
      let separator = document.createElement("span");
      separator.textContent = " | ";
  
      let circle = document.createElement("span");
      circle.style.display = "inline-block";
      circle.style.width = "12px";
      circle.style.height = "12px";
      circle.style.borderRadius = "50%";
      circle.style.backgroundColor = "green";
      circle.style.marginLeft = "6px";
      circle.style.border = "1px solid white";
      circle.style.backgroundImage = "linear-gradient(to bottom, green, white)";
  
      reviews.appendChild(circle);
  
      rating.append(separator, reviews);
      detailBox.append(name, rating);
  
      let delcartBox = document.createElement("div");
      delcartBox.setAttribute("class", "delcartBox");
  
      let deliverybox = document.createElement("div");
      deliverybox.setAttribute("class", "deliveryBox");
  
      let deliveryform = document.createElement("div");
      deliveryform.setAttribute("class", "deliveryForm");
  
      let deliveryText = document.createElement("p");
      deliveryText.setAttribute("class", "deliveryText");
      deliveryText.textContent = "Delivery:";
  
      let deliveryInput = document.createElement("input");
      deliveryInput.setAttribute("type", "number");
      deliveryInput.setAttribute("placeholder", "Enter Pin-code");
  
      let deliveryButton = document.createElement("button");
      deliveryButton.setAttribute("class", "check");
      deliveryButton.textContent = "Check";
      deliveryButton.addEventListener("click", function () {
        checkDelivery(elem, deliveryInput.value);
      });
  
      let delmessage = document.createElement("p");
      delmessage.setAttribute("class", "deliverymessage");
      delmessage.textContent = "Fastest Delivery by Tuesday";
  
      let errormessage = document.createElement("p");
      errormessage.setAttribute("class", "errormessage");
      errormessage.textContent = "";
  
      let cartBox = document.createElement("div");
      cartBox.setAttribute("class", "cartBox");
      let priceDiv = document.createElement("div");
      priceDiv.setAttribute("class", "priceBox");
      let price = document.createElement("p");
      price.setAttribute("class", "price");
      price.textContent = "₹" + elem.price;
  
      let strikedoff = document.createElement("p");
      strikedoff.setAttribute("class", "strikedoff");
      strikedoff.textContent = "₹" + elem.strikedoff;
  
      let discount = document.createElement("p");
      discount.setAttribute("class", "discount");
      discount.textContent = elem.discount;
  
      let quantityBox = document.createElement("div");
      quantityBox.setAttribute("class", "quantity-box");
  
      let minusButton = document.createElement("button");
      minusButton.setAttribute("class", "quantity-button-minus");
      minusButton.textContent = "-";
      minusButton.addEventListener("click", function () {
        updateQuantity(-1);
      });
  
      let quantityDisplay = document.createElement("p");
      quantityDisplay.setAttribute("class", "quantity-display");
      quantityDisplay.textContent = "1";
  
      let plusButton = document.createElement("button");
      plusButton.setAttribute("class", "quantity-button-plus");
      plusButton.textContent = "+";
      plusButton.addEventListener("click", function () {
        updateQuantity(1);
      });
  
      let quantityText = document.createElement("p");
      quantityText.setAttribute("class", "quantity-text");
      quantityText.textContent = "Quantity";
  
      let addToCartButton = document.createElement("button");
      addToCartButton.setAttribute("class", "add-to-cart-button");
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.addEventListener("click", function () {
        addToCart(elem);
      });
  
      let taxtext = document.createElement("p");
      taxtext.setAttribute("class", "tax-text");
      taxtext.textContent = "Inclusive of all taxes";
  
      priceDiv.append(price, discount, strikedoff);
      quantityBox.append(minusButton, quantityDisplay, plusButton, quantityText);
  
      deliveryform.append(deliveryText, deliveryInput, deliveryButton);
      deliverybox.append(delmessage, deliveryform, errormessage);
      cartBox.append(priceDiv, taxtext, quantityBox, addToCartButton);
  
      delcartBox.append(deliverybox, cartBox);
  
      div.append(detailBox, delcartBox);
  
      document.querySelector(".textBox").append(div);
    });
  }
  
  function choose(smallphoto) {
    let picSelector = document.getElementById("imagebox");
    picSelector.src = smallphoto.src;
  }
  
  function checkDelivery(elem, pincode) {
    let deliverymessage = document.querySelector(".deliverymessage");
    let errormessage = document.querySelector(".errormessage");
  
    if (pincode === "110084" || pincode === "462026") {
      deliverymessage.textContent = "Delivery available by Wednesday";
      errormessage.textContent = "";
    } else if (pincode === "415408" || pincode === "208004") {
      deliverymessage.textContent = "Delivery available by Friday";
      errormessage.textContent = "";
    } else if (pincode === "560034") {
      alert(
        "This is pincode of Masai School and complete address is 5th Floor, SJR PermissionStatus, 20th Main RTCDTMFSender, next to Raheja Arcade, 5th CSSLayerBlockRule, Koramangala, Bengaluru, Karnataka 560034"
      );
    } else if (pincode.length !== 6) {
      deliverymessage.textContent = "";
      errormessage.textContent = "Please enter a correct pincode";
    } else {
      deliverymessage.textContent = "Delivery not available";
      errormessage.textContent = "";
    }
  }
  
  function updateQuantity(change) {
    let quantityDisplay = document.querySelector(".quantity-display");
    let currentQuantity = parseInt(quantityDisplay.textContent);
    let newQuantity = currentQuantity + change;
  
    if (newQuantity >= 1) {
      quantityDisplay.textContent = newQuantity.toString();
    }
  }
  
  function addToCart(elem) {
    let cartList = JSON.parse(localStorage.getItem("cartProducts")) || [];
    let existingItem = cartList.find((item) => item.id === elem.id);
  
    let quantityDisplay = document.querySelector(".quantity-display");
    let quantity = parseInt(quantityDisplay.textContent);
  
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.price += elem.price * quantity;
    } else {
      let newCartItem = {
        id: elem.id,
        name: elem.name,
        image: elem.cartImage,
        price: elem.price * quantity,
        quantity: quantity,
      };
  
      cartList.push(newCartItem);
    }
  
    localStorage.setItem("cartProducts", JSON.stringify(cartList));
  }
  
let productArray = []
creating(productArray);
function creating(productArray) {
    let obj = {
        id: 31,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IMT121-bl_600x.png?v=1670595117",
        cartImage:  "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IMT121-bl_600x.png?v=1670595117",
        name: "boAt Immortal 121",
        price: 1699,
        strikedoff: "3490.00",
        discount: "51% off",
        rating: 4.8,
    }

    productArray.push(obj);
    display(productArray)
}

// show(productArray)

function display(productArray) {

    productArray.map(function (elem, ind) {
        let div = document.createElement("div");

        let detailBox = document.createElement("div");
        detailBox.className = "detailbox";
        var name = document.createElement("h2");
        name.textContent = elem.name + "|";
        var details = document.createElement("span");
        details.setAttribute("class", "descriptiontext");
        details.textContent = "  Bluetooth Gaming Wireless Earbuds with BEAST™️ Mode (40ms Low Latency), ASAP™️ Charge, 40 Hours Playback, & Blazing RGB Lights";
        name.appendChild(details);
        var rating = document.createElement("p");
        rating.setAttribute("class", "rating");
        
        var starIcon = document.createElement("span");
        starIcon.textContent = "★";
        rating.appendChild(starIcon);
        rating.textContent += " " + elem.rating;

        var reviews = document.createElement("span");
        reviews.setAttribute("class", "reviews");
        reviews.textContent = "36 reviews";

        var separator = document.createElement("span");
        separator.textContent = " | ";

        var circle = document.createElement("span");
        circle.style.display = "inline-block";
        circle.style.width = "12px";
        circle.style.height = "12px";
        circle.style.borderRadius = "50%";
        circle.style.backgroundColor = "green";
        circle.style.marginLeft = "6px";
        circle.style.border = "1px solid white";
        circle.style.backgroundImage = "linear-gradient(to bottom, green, white)";

        reviews.appendChild(circle);

        rating.append(separator,reviews);
        detailBox.append(name, rating);



        var delcartBox = document.createElement("div");
        delcartBox.setAttribute("class", "delcartBox");

        var deliverybox = document.createElement("div");
        deliverybox.setAttribute("class", "deliveryBox");

        var deliveryform = document.createElement("div");
        deliveryform.setAttribute("class", "deliveryForm");

        var deliveryText = document.createElement("p");
        deliveryText.setAttribute("class", "deliveryText");
        deliveryText.textContent = "Delivery:";

        var deliveryInput = document.createElement("input");
        deliveryInput.setAttribute("type", "number");
        deliveryInput.setAttribute("placeholder", "Enter Pin-code");

        var deliveryButton = document.createElement("button");
        deliveryButton.setAttribute("class", "check");
        deliveryButton.textContent = "Check";
        deliveryButton.addEventListener("click", function () {
            checkDelivery(elem, deliveryInput.value);
        });

        var delmessage = document.createElement("p");
        delmessage.setAttribute("class", "deliverymessage");
        delmessage.textContent = "Fastest Delivery by Tuesday";

        var errormessage = document.createElement("p");
        errormessage.setAttribute("class", "errormessage");
        errormessage.textContent = "";



        var cartBox = document.createElement("div");
        cartBox.setAttribute("class", "cartBox");
        var priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "priceBox");
        var price = document.createElement("p");
        price.setAttribute("class", "price")
        price.textContent = "₹" + elem.price;

        var strikedoff = document.createElement("p");
        strikedoff.setAttribute("class", "strikedoff")
        strikedoff.textContent = "₹" + elem.strikedoff;

        var discount = document.createElement("p");
        discount.setAttribute("class", "discount");
        discount.textContent = elem.discount;


        var quantityBox = document.createElement("div");
        quantityBox.setAttribute("class", "quantity-box");

        var minusButton = document.createElement("button");
        minusButton.setAttribute("class", "quantity-button-minus");
        minusButton.textContent = "-";
        minusButton.addEventListener("click", function () {
            updateQuantity(-1);
        });

        var quantityDisplay = document.createElement("p");
        quantityDisplay.setAttribute("class", "quantity-display");
        quantityDisplay.textContent = "1";

        var plusButton = document.createElement("button");
        plusButton.setAttribute("class", "quantity-button-plus");
        plusButton.textContent = "+";
        plusButton.addEventListener("click", function () {
            updateQuantity(1);
        });

        var quantityText = document.createElement("p");
        quantityText.setAttribute("class", "quantity-text");
        quantityText.textContent = "Quantity";


        var addToCartButton = document.createElement("button");
        addToCartButton.setAttribute("class", "add-to-cart-button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", function () {
            addToCart(elem, ind);
        });

        var taxtext = document.createElement("p");
        taxtext.setAttribute("class", "tax-text");
        taxtext.textContent = "Inclusive of all taxes";

        priceDiv.append(price, discount, strikedoff);
        quantityBox.append(minusButton, quantityDisplay, plusButton, quantityText);

        deliveryform.append(deliveryText, deliveryInput, deliveryButton);
        deliverybox.append(delmessage, deliveryform, errormessage)
        cartBox.append(priceDiv ,taxtext,quantityBox,addToCartButton)

        delcartBox.append(deliverybox, cartBox);

        div.append(detailBox, delcartBox);

        document.querySelector(".textBox").append(div);

    })

}



function choose(smallphoto) {
    let picSelector = document.getElementById("imagebox");
    picSelector.src = smallphoto.src;
}

function choose(smallphoto) {
    let picSelector = document.getElementById("imagebox");
    picSelector.src = smallphoto.src;
}
function checkDelivery(elem, pincode) {
    var deliverymessage = document.querySelector(".deliverymessage");
    var errormessage = document.querySelector(".errormessage");

    if (pincode === "110084" || pincode === "462026") {
        deliverymessage.textContent = "Delivery available by Wednesday";
        errormessage.textContent = "";

    }
    else if (pincode === "415408" || pincode === "208004") {
        deliverymessage.textContent = "Delivery available by Friday";
        errormessage.textContent = "";
    }

    else if (pincode === "560034") {
        alert("This is pincode of Masai School and complete address is 5th Floor, SJR PermissionStatus, 20th Main RTCDTMFSender, next to Raheja Arcade, 5th CSSLayerBlockRule, Koramangala, Bengaluru, Karnataka 560034")
    }
    else if (pincode.length !== 6) {
        deliverymessage.textContent = "";
        errormessage.textContent = "Please enter a correct pincode";
    } else {
        deliverymessage.textContent = "Delivery not available";
        errormessage.textContent = "";
    }
}

function updateQuantity(change) {
    var quantityDisplay = document.querySelector(".quantity-display");
    var currentQuantity = parseInt(quantityDisplay.textContent);
    var newQuantity = currentQuantity + change;

    if (newQuantity >= 1) {
        quantityDisplay.textContent = newQuantity.toString();
    }
}

function addToCart(elem) {
    var cartList = JSON.parse(localStorage.getItem("cartProducts")) || [];
    var existingItem = cartList.find((item) => item.id === elem.id);
  
    var quantityDisplay = document.querySelector(".quantity-display");
    var quantity = parseInt(quantityDisplay.textContent);
  
    if (existingItem) {
      // If the product already exists in the cart, increase the quantity and update the total price
      existingItem.quantity += quantity;
      existingItem.price += elem.price * quantity;
    } else {
      // If the product is not in the cart, create a new object with the required properties
      var newCartItem = {
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
  
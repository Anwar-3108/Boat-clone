var earbuds = [
    {
        id: 11,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call.jpg?v=1682408982",
        alt: "Wave Call",
        name: "Wave Call",
        rating: "4.9",
        price: 1799,
        strikedoffprice: "₹7,990.00",
        discount: "77% off",
        highlight1: "HD Curved Display",
        highlight2: "Save upto 10 contacts",
    },
    {
        id: 12,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lunar_Call_Pro.jpg?v=1682408982",
        cartImage: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bla_800x.png?v=1679660395",
        alt: "Lunar Call Pro",
        name: "Lunar Call Pro",
        rating: "4.7",
        price: 4299,
        strikedoffprice: "₹6,490.00",
        discount: "38% off",
        highlight1: "1.78 AMOLED Display",
        highlight2: "700+ Active Modes ",
    },
    {
        id: 13,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/storm-connect-plus-render.jpg?v=1684224858",
        alt: "storm connect plus",
        name: "Storm Connect Plus",
        rating: "4.9",
        price: 1999,
        strikedoffprice: "₹8,990.00",
        discount: "59% off",
        highlight1: "1.91 HD Display ",
        highlight2: "ENx™ Algorithm ",
    },
    {
        id: 14,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blsck_300x.png?v=1671601227",
        alt: "wave-electra",
        name: "Wave Electra",
        rating: "4.8",
        price: 1990,
        strikedoffprice: "₹7,990.00",
        discount: "75% off",
        highlight1: "HD Display",
        highlight2: "Built-in Games",
    },
    {
        id: 15,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Wave-Infinity.jpg?v=1682583585",
        alt: " wave infinity",
        name: "Wave Infinity",
        rating: "4.8",
        price: 1999,
        strikedoffprice: "₹7,990.00",
        discount: "75% off",
        highlight1: "BT Calling  ",
        highlight2: "100+ Watch Faces"
    },
    {
        id: 17,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Xtend-Pro.jpg?v=1682583585",
        alt: "extend pro",
        name: "Xtend Pro",
        rating: "5.0",
        price: 3999,
        strikedoffprice: "₹9,990.00",
        discount: "59% off",
        highlight1: "1.78 AMOLED Display ",
        highlight2: "700+ Active Modes"
    },
    {
        id: 18,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Watch-Storm---Iron-Man-Marvel-Edition.jpg?v=1682583585",
        alt: "ironman edition",
        name: "Watch Storm Iron Man Edition",
        rating: "4.8",
        price: 2999,
        strikedoffprice: "₹5,490.00",
        discount: "50% off",
        highlight1: "HR & SpO2 Monitoring",
        highlight2: "5ATM Water Resistance ",
    },
    {
        id: 19,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave-Stride-Voice.jpg?v=1682408982",
        alt: "wave stride",
        name: "Wave Stride Voice",
        rating: "4.8",
        price: 2399,
        strikedoffprice: "₹6,490.00",
        discount: "62% off",
        highlight1: "1.78 AMOLED Display ",
        highlight2: "BT Calling  "
    },
    {   
        id:16,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Xtend-Talk.jpg?v=1682583585",
        alt: "xtend-talk",
        name: "Xtend-Talk",
        rating: "4.8",
        price: 3499,
        strikedoffprice: "₹6,990.00",
        discount: "47% off",
        highlight1: "60+ Sports Moddes",
        highlight2: "BT Calling  "
    },
    {
        id: 21,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Wave-Neo.jpg?v=1682583585",
        name: "wave-Neo",
        rating: "4.7",
        price: 1999,
        strikedoffprice: "₹4,990.00",
        discount: "49% off",
        highlight1: "2.5D Curved Display  ",
        highlight2: "Light Weight (35gms) "
    },
    {
        id: 22,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-images_300x.png?v=1655198531",
        alt: "xtend sport",
        name: "Xtend Sport",
        rating: "4.9",
        price: 2499,
        strikedoffprice: "₹6,490.00",
        discount: "64% off",
        highlight1: "Live Cricket Scores",
        highlight2: "700+ Active Modes"
    },

    {
        id: 23,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Watch-Storm---Captain-America-Marvel-Edition.jpg?v=1682583585",
        alt: "watch storm captain america",
        name: "Watch Storm Captain America",
        rating: "5.0",
        price: 2999,
        strikedoffprice: "₹5,940.00",
        discount: "50% off",
        highlight1: "2.5D Curved Display ",
        highlight2: "5 ATM Water Resistance  "
    },
    {
        id: 24,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wave-flex-render.jpg?v=1682573437",
        alt: "wave-flex",
        name: "Wave-Flex",
        rating: "4.8",
        price: 1699,
        strikedoffprice: "₹6,490.00",
        discount: "79% off",
        highlight1: " HD Curved Display ",
        highlight2: "10 Days Battery Life  "
    },

];



displayearBuds();

function displayearBuds() {
    document.getElementById("mainBox").textContent = "";
    earbuds.map(function (element) {
        var div = document.createElement("div");
        div.className = "product";

        var imagebox = document.createElement("div");
        imagebox.className = "product-image";

        var image = document.createElement("img");
        image.src = element.image;
        image.alt = element.alt;

        image.addEventListener("click", function () {
            openProductPage(element);
        });

        imagebox.appendChild(image);

        var productdatabox = document.createElement("div");
        productdatabox.className = "product-details";

        var name = document.createElement("p");
        name.className = "product-name";
        name.textContent = element.name;

        var rating = document.createElement("p");
        rating.className = "rating";
        rating.textContent = element.rating;

        var priceBox = document.createElement("div");
        priceBox.className = "pricebox";
        var price = document.createElement("p");
        price.className = "price"
        price.textContent = "₹" + element.price;

        var strikedoffprice = document.createElement("p");
        strikedoffprice.className = "strikedoffprice"

        strikedoffprice.textContent = element.strikedoffprice;

        var discount = document.createElement("p");
        discount.className = "discount";
        discount.textContent = element.discount;

        var cartbox = document.createElement("div");
        cartbox.className = "cartbox"

        var highlightbox = document.createElement("div");
        highlightbox.className = "highlightbox";
        var highlight1 = document.createElement("p");
        highlight1.className = "highlight1";
        highlight1.textContent = element.highlight1;


        var highlight2 = document.createElement("p");
        highlight2.className = "highlight2";
        highlight2.textContent = element.highlight2;



        var cart = document.createElement("button");
        cart.textContent = "Add to cart";
        cart.className = "functions";
        cart.setAttribute("cart", "cartBtn");

        cart.addEventListener("click", function () {
            addToCart(element);
        });


        highlightbox.append(highlight1, highlight2)
        priceBox.append(price, strikedoffprice, discount);
        cartbox.append(highlightbox, cart);
        productdatabox.append(rating, name, priceBox, cartbox);




        div.append(imagebox, productdatabox);

        document.getElementById("mainBox").appendChild(div);
    });
}
function addToCart(product) {
    var cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    var existingProductIndex = cartProducts.findIndex(function (p) {
        return p.id === product.id;
    });

    if (existingProductIndex !== -1) {
        var existingProduct = cartProducts[existingProductIndex];
        existingProduct.quantity += 1;
        existingProduct.price = parseInt(product.price) * existingProduct.quantity;
    } else {
        var newProduct = {
          id: product.id,
          image: product.id === 12 ? product.cartImage : product.image,
          name: product.name,
          price: parseInt(product.price),
          quantity: 1,
        };
        cartProducts.push(newProduct);
    }

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}






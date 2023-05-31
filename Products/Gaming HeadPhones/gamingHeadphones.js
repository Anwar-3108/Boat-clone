var earbuds = [
    {
        id: 31,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ezgif-1-6381642bb4.gif?v=1685013470",
        cartImage: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IMT121-bl_600x.png?v=1670595117",
        alt: "Immortal 121",
        name: "Immortal 121",
        rating: "4.8",
        price: 1699,
        strikedoffprice: "₹3,900",
        discount: "51% off",
        highlight1: "BEAST™ Mode ",
        highlight2: "Real RGB LEDs",
    },
    {
        id: 32,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-1_bf68149e-5ab0-4761-8116-d558ef0e178a_300x.png?v=1679352411",
        alt: "Immortal 200",
        name: "Immortal 200",
        rating: "4.8",
        price: 1999,
        strikedoffprice: "₹4,490.00",
        discount: "60% off",
        highlight1: "50mm Drivers",
        highlight2: "Noise Isolating Mic",
    },
    {
        id: 33,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_300x.png?v=1625748159",
        alt: "Immortal 1000D",
        name: "Immortal 1000D",
        rating: "4.9",
        price: 2999,
        strikedoffprice: "₹5,990.00",
        discount: "50% off",
        highlight1: "Dolby Atmos  ",
        highlight2: "Denoising Mic",
    },
    {
        id: 34,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-700_300x.png?v=1643632678",
        alt: "Immortal 400",
        name: "Immortal 400",
        rating: "4.8",
        price: 1999,
        strikedoffprice: "₹6,990.00",
        discount: "71% off",
        highlight1: "50mm Drivers ",
        highlight2: "Remote Controller",
    },
    {
        id: 35,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_300x.png?v=1632715015",
        alt: " Immortal 1300",
        name: "Immortal 1300",
        rating: "4.8",
        price: 3499,
        strikedoffprice: "₹9,990.00",
        discount: "65% off",
        highlight1: "Driverless 3D Sound ",
        highlight2: "Dedicated Dongle Slot "
    },
    {
        id: 37,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_5b22314d-3d06-41ee-8ff8-6dbc83e27ab1_300x.png?v=1658573936",
        alt: "Immortal300",
        name: "Immortal300",
        rating: "5.0",
        price: 1999,
        strikedoffprice: "₹4,990.00",
        discount: "59% off",
        highlight1: "50mm Drivers  ",
        highlight2: "Noise Isolating Mic "
    },
    {
        id: 38,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_300x.png?v=1643477993",
        alt: "Immortal 700",
        name: "Immortal 700",
        rating: "Be first to review ",
        price: 2749,
        strikedoffprice: "₹6,990.00",
        discount: "61% off",
        highlight1: "BEAST™ Mode",
        highlight2: "Dedicated Dongle Slot",
    },
    {
        id: 39,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM131-FI_Black01-PhotoRoom.png-PhotoRoom_300x.png?v=1674687289",
        alt: "Immortal 131",
        name: "Wave Stride Voice",
        rating: "4.8",
        price: 1599,
        strikedoffprice: "₹3,490.00",
        discount: "54% off",
        highlight1: "Up to 40HRS Playback  ",
        highlight2: "ENx™ Technology"
    },
    {
        id: 36,
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IMT121_64a3adf8-db30-42ff-afbc-d44f93c37aaf_300x.png?v=1678179646",
        alt: "Trebele Immortal 121",
        name: "TRebele Immortal 121",
        rating: "Be first to review",
        price: 1699,
        strikedoffprice: "₹3,490.00",
        discount: "51% off",
        highlight1: "BEAST™ Mode ",
        highlight2: " Real RGB LEDs"
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
            image: product.cartImage,
            name: product.name,
            price: parseInt(product.price),
            quantity: 1,
        };
        cartProducts.push(newProduct);
    }

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}




function openProductPage() {
    window.location.href = "Products/Gaming HeadPhones/Product Description/boAtImmortal121.html";
}




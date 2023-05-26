var earbuds = [
    {
        id: 1,
        image: "Images/boAt Airdopes 413 ANC.webp",
        alt: "boAt Airdopes 413 ANC",
        name: "Airdopes 413 ANC",
        rating: "5.0",
        price: 1999,
        strikedoffprice: "₹4,990.00",
        discount: "60% off",
        highlight1: "ASAP™ Charge",
        highlight2: "IWP Technology",
    },
    {
        id: 2,
        image: "Images/boAt Airdopes Atom 83.webp",
        alt: "boAt Airdopes Atom 83",
        name: "Airdopes Atom 83",
        rating: "Be first to review ",
        price: 1499,
        strikedoffprice: "₹3,490.00",
        discount: "57% off",
        highlight1: "Clear Calling ",
        highlight2: "ASAP™ Charge ",
    },
    {
        id: 3,
        image: "Images/boAt-Airdopes-121-PRO.webp",
        alt: "boAt-Airdopes-121-PRO",
        name: "Airdopes 121 PRO",
        rating: "4.9",
        price: 1499,
        strikedoffprice: "₹2,990.00",
        discount: "49% off",
        highlight1: "13mm drivers",
        highlight2: "Clear Calling",
    },
    {
        id: 4,
        image: "Images/boAt-Airdopes-501-ANC.webp",
        alt: "boAt-Airdopes-501-ANC",
        name: "Airdopes 501 ANC",
        rating: "5.0",
        price: 4990,
        strikedoffprice: "₹9,990.00",
        discount: "80% off",
        highlight1: "BEAST™ Mode",
        highlight2: "ASAP™ Charge",
    },
    {
        id: 6,
        image: "Images/boAt Airdopes 141.webp",
        alt: "boAt Airdopes 141",
        name: "Airdopes 141",
        rating: "4.8",
        price: 1399,
        strikedoffprice: "₹4,990.00",
        discount: "68% off",
        highlight1: "ENx™ Technology ",
        highlight2: "ASAP™ Fast Charge"
    },
    {
        id: 7,
        image: "Images/Airdopes-393-ANC.webp",
        alt: "Airdopes-393-ANC",
        name: "Airdopes 393 ANC",
        rating: "5.0",
        price: 2999,
        strikedoffprice: "₹4,990.00",
        discount: "39% off",
        highlight1: "BEAST™ Mode",
        highlight2: "ASAP™ Charge"
    },
    {
        id: 8,
        image: "Images/boAt Airdopes 161.webp",
        alt: "boAt Airdopes 161",
        name: "Airdopes 161",
        rating: "4.9",
        price: 1099,
        strikedoffprice: "₹2,490.00",
        discount: "55% off",
        highlight1: "13mm drivers",
        highlight2: "Clear Calling",
    },
    {
        id: 9,
        image: "Images/boAt-Airdopes-192.webp",
        alt: "boAt-Airdopes-192",
        name: "Airdopes 192",
        rating: "4.8",
        price: 1999,
        strikedoffprice: "₹3,490.00",
        discount: "42% off",
        highlight1: "10mm drivers",
        highlight2: "Clear Calling"
    },
    {
        image: "Images/Airdopes 411 ANC.webp",
        alt: "Airdopes 411 ANC",
        name: "Airdopes 411 ANC",
        rating: "4.8",
        price: 2499,
        strikedoffprice: "₹4,990.00",
        discount: "49% off",
        highlight1: "13mm drivers",
        highlight2: "Boat Surround",
    },
    {
        id: 10,
        image: "Images/Airdopes_115.webp",
        alt: "Airdopes_115",
        name: "Airdopes 115",
        rating: "4.9",
        price: 1499,
        strikedoffprice: "₹2,990.00",
        discount: "49% off",
        highlight1: "boAt Immersive Sound ",
        highlight2: "Up to 90HRS Playback "
    },
    {
        id: 11,
        image: "Images/Airdopes_100.webp",
        alt: "Airdopes_100",
        name: "Airdopes 100",
        rating: "4.7",
        price: 1199,
        strikedoffprice: "₹2,490.00",
        discount: "60% off",
        highlight1: "boAt Sorrounding Sound",
        highlight2: "LED Battery Case "
    },

    {
        id: 12,
        image: "Images/Airdopes-163.webp",
        alt: "Airdopes-163",
        name: "Airdopes 163",
        rating: "4.8",
        price: 1399,
        strikedoffprice: "₹2,490.00",
        discount: "43% off",
        highlight1: "ENx™ Technology ",
        highlight2: "Up to 40HRS Playback "
    },
    {
        id: 14,
        image: "Images/Airdopes-191G.webp",
        alt: "Airdopes-191G",
        name: "Airdopes 191G",
        rating: "4.9",
        price: 1799,
        strikedoffprice: "₹3,490.00",
        discount: "48% off",
        highlight1: "Up to 30HRS Playback ",
        highlight2: "LED Battery Case "
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
    var existingProduct = cartProducts.find(function (p) {
      return p.name === product.name;
    });
  
    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.price = parseInt(product.price) * existingProduct.quantity;
    } else {
      var newProduct = {
        image: product.image_url,
        name: product.name,
        price: parseInt(product.price),
        quantity:1,
      };
      cartProducts.push(newProduct);
    }
  
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }


function openProductPage(element) {
    window.location.href = "product" + element.id + ".html";
}




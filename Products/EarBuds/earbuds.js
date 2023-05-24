var earbuds = [
    {
        image: "Images/boAt Airdopes 413 ANC.webp",
        alt: "boAt Airdopes 413 ANC",
        name: "Airdopes 413 ANC",
        rating: "5",
        price: "₹1,999",
        strikedoffprice: "₹4,990.00",
        discount: "60% off",
        functions: "Product functions..."
    },
    {
        image: "Images/boAt Airdopes Atom 83.webp",
        alt: "boAt Airdopes Atom 83",
        name: "Airdopes Atom 83",
        rating: "Be first to review ",
        price: "₹1,499",
        strikedoffprice: "₹3,490.00",
        discount: "57% off",
        functions: "Product functions..."
    },
    {
        image: "Images/boAt-Airdopes-121-PRO.webp",
        alt: "boAt-Airdopes-121-PRO",
        name: "Airdopes 121 PRO",
        rating: "4.9",
        price: "₹1,499",
        strikedoffprice: "₹2,990.00",
        discount: "49% off",
        functions: "Product functions..."
    },
    {
        image: "Images/boAt-Airdopes-501-ANC.webp",
        alt: "boAt-Airdopes-501-ANC",
        name: "Airdopes 501 ANC",
        rating: "5",
        price: "₹4,990",
        strikedoffprice: "₹9,990.00",
        discount: "80% off",
        functions: "Product functions..."
    },
    {
        image: "Images/boAt Airdopes 141.webp",
        alt: "boAt Airdopes 141",
        name: "Airdopes 141",
        rating: "4.8",
        price: "1,399",
        strikedoffprice: "₹4,990.00",
        discount: "68% off",
        functions: "Product functions..."
    },
    {
        image: "Images/Airdopes-393-ANC.webp",
        alt: "Airdopes-393-ANC",
        name: "Airdopes 393 ANC",
        rating: "5",
        price: "₹2,999",
        strikedoffprice: "₹4,990.00",
        discount: "39% off",
        functions: "Product functions..."
    },
    {
        image: "Images/boAt Airdopes 161.webp",
        alt: "boAt Airdopes 161",
        name: "Airdopes 161",
        rating: "4.9",
        price: "₹1,099",
        strikedoffprice: "₹2,490.00",
        discount: "55% off",
        functions: "Product functions..."
    },
    {
        image: "Images/boAt-Airdopes-192.webp",
        alt: "boAt-Airdopes-192",
        name: "Airdopes 192",
        rating: "4.8",
        price: "₹1,999",
        strikedoffprice: "₹3,490.00",
        discount: "42% off",
        functions: "Product functions..."
    },
    {
        image: "Images/Airdopes 411 ANC.webp",
        alt: "Airdopes 411 ANC",
        name: "Airdopes 411 ANC",
        rating: "4.8",
        price: "₹2,499",
        strikedoffprice: "₹4,990.00",
        discount: "49% off",
        functions: "Product functions..."
    },
    {
        image: "Images/Airdopes_115.webp",
        alt: "Airdopes_115",
        name: "Airdopes 115",
        rating: "4.9",
        price: "₹1,499",
        strikedoffprice: "₹2,990.00",
        discount: "49% off",
        functions: "Product functions..."
    },
    {
        image: "Images/Airdopes_100.webp",
        alt: "Airdopes_100",
        name: "Airdopes 100",
        rating: "4.7",
        price: "₹1,199",
        strikedoffprice: "₹2,490.00",
        discount: "60% off",
        functions: "Product functions..."
    },

    {
        image: "Images/Airdopes-163.webp",
        alt: "Airdopes-163",
        name: "Airdopes 163",
        rating: "4.8",
        price: "₹1,399",
        strikedoffprice: "₹2,490.00",
        discount: "43% off",
        functions: "Product functions..."
    },
    {
        image: "Images/Airdopes-191G.webp",
        alt: "Airdopes-191G",
        name: "Airdopes 191G",
        rating: "4.9",
        price: "₹1,799",
        strikedoffprice: "₹3,490.00",
        discount: "48% off",
        functions: "Product functions..."
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
        price.textContent = element.price;

        var strikedoffprice = document.createElement("p");
        strikedoffprice.className = "strikedoffprice"

        strikedoffprice.textContent = element.strikedoffprice;

        var discount = document.createElement("p");
        discount.className = "discount";
        discount.textContent = element.discount;

        var cartbox = document.createElement("div");
        cartbox.className = "cartbox"

        var highlight = document.createElement("p");
        highlight.textContent = element.functions;

        var cart = document.createElement("button");
        cart.textContent = "Add to cart";
        cart.className = "functions";
        cart.setAttribute("cart", "cartBtn");

        cart.addEventListener("click", function () {
            addToCart(element);
        });



        priceBox.append(price, strikedoffprice, discount);
        cartbox.append(highlight, cart);
        productdatabox.append(rating, name, priceBox, cartbox);




        div.append(imagebox, productdatabox);

        document.getElementById("mainBox").appendChild(div);
    });

    function addToCart(product) {
        var cartProducts = JSON.parse(localStorage.getItem("cartList")) || [];
        var existingProduct = cartProducts.find(function (p) {
            return p.name === product.name;
        });

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            var newProduct = {
                image: product.image_url,
                name: product.name,
                price: product.price,
                quantity: 1
            };
            cartProducts.push(newProduct);
        }

        localStorage.setItem("cartList", JSON.stringify(cartProducts));
        
    }

}




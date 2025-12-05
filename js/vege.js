let totalAddClicks = 0;

const products = {
    1: { name: "Onion", Price: 50, image: "image/2.png" },
    2: { name: "Tomato", Price: 69, image: "image/download (4).jpg" },
    3: { name: "Potato", Price: 82, image: "image/3.png" },
    4: { name: "Capsicum", Price: 60, image: "image/4.png" },
    5: { name: "Corn", Price: 70, image: "image/5.png" },
    6: { name: "Mushroom Big", Price: 50, image: "image/6.png" },
    7: { name: "Brinjall Big Big", Price: 50, image: "image/download (7).jpg" },
    8: { name: "Avocado Big", Price: 150, image: "image/1.png" },
    9: { name: "Lemon Big", Price: 98, image: "image/download (10).jpg" },
    10: { name: "Bhindi Big", Price: 50, image: "image/download (14).jpg" },
    11: { name: "Raw Banana", Price: 50, image: "image/download (15).jpg" },
    12: { name: "Coriander", Price: 60, image: "image/Coriander_540x@2x.jpg" },
};

const cart = [];

function addtocart(id) {
    const product = products[id];
    if (!product) return;

    cart.push({
        id,
        name: product.name,
        Price: product.Price,
        image: product.image
    });

    updateCartSummary();
    saveCartToLocalStorage();
    document.getElementById("cart-summary").style.display = "block";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartSummary();
    saveCartToLocalStorage();
}

function updateCartSummary() {
    const summaryItems = document.getElementById('summary-items');
    const totalAmount = document.getElementById('total-amount');
    const cartCount = document.querySelector('.addcart');

    summaryItems.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        total += item.Price;

        const itemElement = document.createElement('div');
        itemElement.classList.add("cart-item");

        itemElement.innerHTML = `
            <div style="display:flex; align-items:center; margin-bottom:10px;">
                <img src="${item.image}" width="50" height="50" style="border-radius:5px; margin-right:10px;">
                <p style="flex-grow:1; margin:0;">
                    ${index + 1}. <b>${item.name}</b> - ₹${item.Price}
                </p>
                <i class="fa fa-times" style="color:red; cursor:pointer;" onclick="removeFromCart(${index})"></i>
            </div>
        `;

        summaryItems.appendChild(itemElement);
    });

    totalAmount.innerText = total;
    cartCount.innerText = cart.length;
}

function closecart() {
    document.getElementById("cart-summary").style.display = "none";
}

function payNow() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("Payment successful!");

    cart.length = 0;
    localStorage.removeItem('shoppingCart');
    updateCartSummary();
}

// --- LOCAL STORAGE ---
function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        cart.length = 0;
        cart.push(...parsedCart);
        updateCartSummary();
    }
}

window.onload = function () {
    loadCartFromLocalStorage();
};

// registration form
sumbtn.addEventListener("click", () => {
    let uname = document.querySelector("#uname").value;
    let email = document.querySelector("#email").value;
    let pname = document.querySelector("#pname").value;
    let cpname = document.querySelector("#cpname").value;

    console.log(uname, email, pname, cpname);
});



let totalAddClicks = 0;
const products = {
    1: { name: "Onion", Price: 50 },
    2: { name: "Tomoto", Price: 69 },
    3: { name: "Potato", Price: 82 },
    4: { name: "Capsicum Green ", Price: 60 },
    5: { name: "Mushroom", Price: 50 },
    6: { name: "Brinjall Big", Price: 50 },
    7: { name: "Onion", Price: 50 },
    8: { name: "Onion", Price: 75 },
    9: { name: "Onion", Price: 100 },
    10: { name: "Onion", Price: 40 },
    11: { name: "Onion", Price: 65 },
    12: { name: "Onion", Price: 95 },
};
const cart = [];


function addtocart(id) {
    const product = products[id];
    if (!product) return;
    cart.push({ id, name: product.name, Price: product.Price });
    updateCartSummary();
    saveCartToLocalStorage();
    document.getElementById("cart-summary").style.display = "block";

}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartSummary();
    saveCartToLocalStorage()
}
function removeProductLessThan(amount) {
    const index = cart.findIndex(item => item.Price < amount);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartSummary();
        saveCartToLocalStorage()
    } else {
        alert(`No product found in the cart with price less than ₹${amount}`);
    }
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
        itemElement.innerHTML = `
        <p>
          ${index + 1}. ${item.name} - ₹${item.Price}
          <i class="fa fa-times" style="color:red; float:right; cursor:pointer;" onclick="removeFromCart(${index})"></i>
        </p>
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
// ============ local storage===============


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
    document.getElementById("shoplist").addEventListener("click", () => {
        window.location.href = "addtocart.html";
    });
}


// registration form



 sumbtn.addEventListener("click",()=>{
        let uname=document.querySelector("#uname").value;
        let email=document.querySelector("#email").value;
         let pname=document.querySelector("#pname").value;
        let cpname=document.querySelector("#cpname").value;
        console.log(uname,email,pname,cpname)

        
 })


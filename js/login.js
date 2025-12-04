let loginForm = document.querySelector("#sub"); 
let logindetails = JSON.parse(localStorage.getItem("logindata")) || [];

loginForm.addEventListener("click", (e) => {
    e.preventDefault(); 

    let email = document.querySelector("#Email").value;
    let password = document.querySelector("#Password").value;

    if (email && password) {
        let logininfo = { email, password };

        logindetails.push(logininfo);
        localStorage.setItem("logindata", JSON.stringify(logindetails));

        alert("Login successfully!");
        window.location.href = "home.html";
    } else {
        alert("Please fill in all the details");
    }
});

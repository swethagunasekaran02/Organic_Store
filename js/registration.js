let RegisterForm = document.querySelector("#btn")
let customer;

let alreadysaved = JSON.parse(localStorage.getItem("customer_info"))
if (alreadysaved && alreadysaved.length >= 1) {
    customer = alreadysaved
} else {
    customer = []
}

RegisterForm.addEventListener("click", () => {
    // alert("hii")

    let username = document.querySelector("#UName").value;
    let Email_Add = document.querySelector("#Email").value;
    let Pass = document.querySelector("#Password").value;
    let C_Pass = document.querySelector("#C_Password").value;


    if (username && Email_Add && Pass && C_Pass) {

        let info = {
            username,
            Email_Add,
            Pass,
            C_Pass

        }
        customer.push(info)


        localStorage.setItem("customer_info", JSON.stringify(customer))
        alert("register successfully...")
        RegisterForm.reset();
       
        


    } else {
        alert("Please fill the details")
    }
})





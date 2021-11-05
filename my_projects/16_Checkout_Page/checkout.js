
const button = document.getElementsByTagName("i");

const arr = [...button]
const productPanel = document.getElementById("product-painel")
const subTotal = document.getElementById("cart-subtotal").children[1]
const tax = document.getElementById("cart-tax").children[1]
const shipping = document.getElementById("cart-shipping").children[1]
const total = document.getElementById("cart-total").children[1]




arr.forEach(el => {


    if (el.className == "fas fa-plus") {
        el.addEventListener("click", function () {
            let productTotal = el.parentElement.parentElement.nextElementSibling.nextElementSibling;
            let productTotalValue = parseFloat(productTotal.innerText);
            let quantity = el.parentElement.parentElement.children[1];
            let amount = parseInt(quantity.innerText);
            let productPrice = productTotal.parentElement.children[1]
            let productPriceValue = parseFloat(productPrice.innerText)
            let subTotalvalue = parseFloat(subTotal.innerText)



            quantity.innerHTML = amount + 1;
            productTotal.innerText = (productTotalValue + productPriceValue).toFixed(2)
            subTotal.innerText = (subTotalvalue + productPriceValue).toFixed(2);
            tax.innerText = (subTotal.innerText * (0.18)).toFixed(2)
            total.innerText = (parseFloat(subTotal.innerText) + parseFloat(tax.innerText) + parseFloat(shipping.innerText)).toFixed(2)

        })

    }
    else if (el.className == "fas fa-minus") {
        el.addEventListener("click", function () {

            let productTotal = el.parentElement.parentElement.nextElementSibling.nextElementSibling;
            let productTotalValue = parseFloat(productTotal.innerText);
            let quantity = el.parentElement.parentElement.children[1];
            let amount = parseInt(quantity.innerText);
            let productPrice = productTotal.parentElement.children[1]
            let productPriceValue = parseFloat(productPrice.innerText)
            let subTotalvalue = parseFloat(subTotal.innerText)



            if (amount <= 1) {
                quantity.innerHTML = 1;

            } else {
                quantity.innerHTML = amount - 1;
                productTotal.innerText = (productTotalValue - productPriceValue).toFixed(2)
                subTotal.innerText = (subTotalvalue - productPriceValue).toFixed(2);
                tax.innerText = (subTotal.innerText * (0.18)).toFixed(2)
                total.innerText = (parseFloat(subTotal.innerText) + parseFloat(tax.innerText) + parseFloat(shipping.innerText)).toFixed(2)
            }


        })

    }
});



const removeBtn = document.getElementsByClassName("remove-product")
const arr2 = [...removeBtn];

arr2.forEach(el => {
    
    el.addEventListener("click", function () {

        el.parentElement.parentElement.parentElement.remove()
        subTotal.innerText = (parseFloat(subTotal.innerText) - parseFloat(el.parentElement.nextElementSibling.innerText)).toFixed(2)
        tax.innerText = (parseFloat(subTotal.innerText) * 0.18).toFixed(2)
        total.innerText = (parseFloat(subTotal.innerText) + parseFloat(shipping.innerText) + parseFloat(tax.innerText)).toFixed(2)


       


    })

    
});



 


 
















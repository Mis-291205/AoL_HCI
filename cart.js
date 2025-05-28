var quantityCNY = 0;
var quantityLunch = 0;
var quantityKids = 0;
var quantityRegular = 0;
var quantityParty = 0;

var priceCNY = 0;
var priceLunch = 0;
var priceKids = 0;
var priceRegular = 0;
var priceParty = 0;
var grandPrice = 0;

const loggedInUsername = localStorage.getItem('loggedInUsername');

function calculateTotal(){
    if(quantityCNY < 0) {
        document.getElementById('quantity-CNY').value = "";
        document.getElementById('quantity-CNY').placeholder = "Can't be negative";
    }
    else priceCNY = quantityCNY * 240000;
    document.querySelector('.price-CNY').textContent = "Total Price: Rp " + priceCNY;

    if(quantityLunch < 0) {
        document.getElementById('quantity-Lunch').value = "";
        document.getElementById('quantity-Lunch').placeholder = "Can't be negative";
    }
    else priceLunch = quantityLunch * 20000;
    document.querySelector('.price-Lunch').textContent = "Total Price: Rp " + priceLunch;



    if(quantityKids < 0) {
        document.getElementById('quantity-Kids').value = "";
        document.getElementById('quantity-Kids').placeholder = "Can't be negative";
    }
    else if(quantityKids < 20) priceKids = quantityKids * 20000;
    else if(quantityKids >= 20) priceKids = quantityKids * 15000;
    document.querySelector('.price-Kids').textContent = "Total Price: Rp " + priceKids;



    if(quantityRegular < 0) {
        document.getElementById('quantity-Regular').value = "";
        document.getElementById('quantity-Regular').placeholder = "Can't be negative";
    }
    else if(quantityRegular > 0 && quantityRegular < 25) {
        document.getElementById('quantity-Regular').value = "";
        document.getElementById('quantity-Regular').placeholder = "Minimum 25 packs";
    }
    else if(quantityRegular < 50) priceRegular = quantityRegular * 25000;
    else if(quantityRegular >= 50) priceRegular = quantityRegular * 20000;
    document.querySelector('.price-Regular').textContent = "Total Price: Rp " + priceRegular;

    


    if(quantityParty < 0) {
        document.getElementById('quantity-Party').value = "";
        document.getElementById('quantity-Party').placeholder = "Can't be negative";
    }
    else if(quantityParty > 0 && quantityParty < 250) {
        document.getElementById('quantity-Party').value = "";
        document.getElementById('quantity-Party').placeholder = "Minimum 250 packs"; 
    }
    else if(quantityParty < 500) priceParty = quantityParty * 75000;
    else if(quantityParty < 1000) priceParty = quantityParty * 60000;
    else if(quantityParty >= 1000) priceParty = quantityParty * 50000;
    document.querySelector('.price-Party').textContent = "Total Price: Rp " + priceParty;


    grandPrice = priceCNY + priceLunch + priceKids + priceRegular + priceParty;

    document.querySelector('.grand-price h1').textContent = "Grand Price: Rp " + grandPrice;
}

if (!loggedInUsername) {
    alert("Not logged in. Please log in first.");
    window.location.href = 'home.html';
} else {

    document.querySelector('.button-OK-CNY').addEventListener('click', function(){
        quantityCNY = parseInt(document.getElementById('quantity-CNY').value);
        calculateTotal();
    });

    document.querySelector('.button-OK-Lunch').addEventListener('click', function(){
        quantityLunch = parseInt(document.getElementById('quantity-Lunch').value);
        calculateTotal();
    });

    document.querySelector('.button-OK-Kids').addEventListener('click', function(){
        quantityKids = parseInt(document.getElementById('quantity-Kids').value);
        calculateTotal();
    });

    document.querySelector('.button-OK-Regular').addEventListener('click', function(){
        quantityRegular = parseInt(document.getElementById('quantity-Regular').value);
        calculateTotal();
    });

    document.querySelector('.button-OK-Party').addEventListener('click', function(){
        quantityParty = parseInt(document.getElementById('quantity-Party').value);
        calculateTotal();
    });


    document.querySelector('.button-Confirm').addEventListener('click', function(){
        if (localStorage.getItem('loggedInUsername')) {
            if(grandPrice != 0) alert("Purchased! Thank You! ^^");
            else alert("Choose item first!");
        } else {
            alert("Login or Register first!");
            window.location.href = 'login.html'; 
        }
    });
}
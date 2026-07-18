// Motion X Website Script

// Add to cart buttons

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "Added ✓";

        button.style.background = "white";
        button.style.color = "black";

        setTimeout(() => {

            button.innerHTML = "Add To Cart";
            button.style.background = "#ff3b00";
            button.style.color = "white";

        }, 1500);

    });

});



// Simple search feature

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();

    let products = document.querySelectorAll(".card");


    products.forEach(product => {

        let name = product.innerText.toLowerCase();


        if(name.includes(value)){

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });


});

}

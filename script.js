const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `

})


const wishlist = document.querySelector("#wishlist");

document.querySelector("#saveWishlist").addEventListener("click", function(){
    const thingToBuy = document.querySelector("#thing").value;
    const locationToBuy = document.querySelector("#location").value;

    document.querySelector("#thing").value = "";
    document.querySelector("#thing").focus();
    document.querySelector("#location").value = "";

    if(thingToBuy != "" && locationToBuy != ""){
    wishlist.innerHTML += `
    <section>
    <h1>I can buy ${thingToBuy} at ${locationToBuy}</h1>
    </section>
    `
    }
    else{
        alert("Please put words into both fields!");
    }
})
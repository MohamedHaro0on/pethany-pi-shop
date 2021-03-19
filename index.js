"use strict";

document.addEventListener("DOMContentLoaded" , function (e){
    let OrderDetails = JSON.parse(localStorage.getItem("order"));
    const pie = document.querySelector(".pie");
    if (OrderDetails){
        pie.querySelector(".title").innerText = OrderDetails.title;
        pie.querySelector(".price").innerText = OrderDetails.price ;
        pie.querySelector(".desc").innerText = OrderDetails.desc;
        pie.querySelector("img").setAttribute("src", OrderDetails.imgSrc)
        pie.querySelector("img").setAttribute("alt" , OrderDetails.title);

        document.querySelector("form input[id='pie-order']").setAttribute("value" , JSON.stringify(OrderDetails));
        // document.querySelector("form input[id='location']").setAttribute("value" , JSON.stringify(window.navigator.geolocation.getCurrentPosition()));
        let LocationBox = document.querySelector("form input[id='location']") ;
        let Location = {
            lattiude : null,
            longitude: null ,
        }
        window.navigator.geolocation.getCurrentPosition(
            position =>{
                Location.lattiude = position.coords.latitude ;
                Location.longitude = position.coords.longitude;
                LocationBox.setAttribute("value" , JSON.stringify(Location));
            },
            error=>{
                LocationBox.setAttribute("value" , JSON.stringify(Location));
            }
        )
    }
  
});
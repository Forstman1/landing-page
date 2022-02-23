





// document.querySelector(".card1").addEventListener('mouseover', function ()
// {
//     let card1 = document.querySelector(".card1");
//     card1.style.backgroundColor = "#F4D03F";
//     setTimeout(() => card1.style.backgroundColor = "white", 500);
// });

// document.querySelector(".card2").addEventListener('mouseover', function ()
// {
//     let card2 = document.querySelector(".card2");
//     card2.style.backgroundColor = "#F4D03F";
//     setTimeout(() => card2.style.backgroundColor = "white", 500);
// });

// document.querySelector(".card3").addEventListener('mouseover', function ()
// {
//     let card3 = document.querySelector(".card3");
//     card3.style.backgroundColor = "#F4D03F";
//     setTimeout(() => card3.style.backgroundColor = "white", 500);
// });


var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");


document.querySelector(".card1").addEventListener('mouseover', function ()
{
    card1.style.backgroundColor = "#F4D03F";
});

document.querySelector(".card1").addEventListener('mouseout', function ()
{
    card1.style.backgroundColor = "white";
});


document.querySelector(".card2").addEventListener('mouseover', function ()
{
    card2.style.backgroundColor = "#F4D03F";
});

document.querySelector(".card2").addEventListener('mouseout', function ()
{
    card2.style.backgroundColor = "white";
});

document.querySelector(".card3").addEventListener('mouseover', function ()
{
    card3.style.backgroundColor = "#F4D03F";
});

document.querySelector(".card3").addEventListener('mouseout', function ()
{  
    card3.style.backgroundColor = "white";
});
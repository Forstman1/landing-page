

// selecting the classes

var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");
var image1 = document.querySelector(".image1");
var image2 = document.querySelector(".image2");
var image3 = document.querySelector(".image3");
var text_cards1 = document.querySelector(".text-cards1");
var text_cards2 = document.querySelector(".text-cards2");
var text_cards3 = document.querySelector(".text-cards3");

// creating new elements

var subcard = document.createElement('div');
subcard.classList.add('animations');

document.querySelector(".card1").addEventListener('mouseover', function ()
{
    card1.style.backgroundColor = "#F4D03F";
    card1.appendChild(subcard);
    image1.style.display = "none";
    text_cards1.style.display = "none";
    
    subcard.style.display = "block";
    
    // subcard.style.backgroundColor = "white";
    // subcard.style.width = "100%";
    // subcard.style.height = "100%";
    // subcard.style.cursor= "pointer";
    // subcard.style.borderRadius= "15px";
    // subcard.style.transform = "translateY(-50px)";
    // subcard.style.transform = "translateY(0px)";
});


document.querySelector(".card1").addEventListener('mouseout', function ()
{
    card1.style.backgroundColor = "white";
    subcard.style.display = "none";
    image1.style.display = "inline";
    text_cards1.style.display = "block";

});

// boxOne.classList.add('horizTranslate');

document.querySelector(".card2").addEventListener('mouseover', function ()
{
    card2.style.backgroundColor = "#F4D03F";
    image2.style.display = "none";
    text_cards2.style.display = "none";
    card2.appendChild(subcard);   
    subcard.style.display = "block";
});

document.querySelector(".card2").addEventListener('mouseout', function ()
{
    card2.style.backgroundColor = "white";
    subcard.style.display = "none";
    image2.style.display = "inline";
    text_cards2.style.display = "block";
});

document.querySelector(".card3").addEventListener('mouseover', function ()
{
    card3.style.backgroundColor = "#F4D03F";
    image3.style.display = "none";
    text_cards3.style.display = "none";
    card3.appendChild(subcard);  
    subcard.style.display = "block";
});

document.querySelector(".card3").addEventListener('mouseout', function ()
{  
    card3.style.backgroundColor = "white";
    subcard.style.display = "none";
    image3.style.display = "inline";
    text_cards3.style.display = "block";
});
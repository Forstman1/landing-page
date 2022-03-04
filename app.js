

// selecting the classes

var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");
var card_container = document.querySelector(".card-container");
var form_card = document.querySelector(".form-card");

var image1 = document.querySelector(".image1");
var image2 = document.querySelector(".image2");
var image3 = document.querySelector(".image3");
var image4 = document.querySelector(".image4");


var text_cards1 = document.querySelector(".text-cards1");
var text_cards2 = document.querySelector(".text-cards2");
var text_cards3 = document.querySelector(".text-cards3");

// creating new elements
var marketing_button = document.querySelector(".marketingbutton");
var BUTTON_homepage = document.querySelector(".buttonhomepage");


var textElement1 = document.createElement('p');
var textElement2 = document.createElement('p');
var textElement3 = document.createElement('p');
var link = document.createElement('a');


//subcard1.classList.add('animations');

card1.addEventListener('mouseover', function ()
{
    card1.style.backgroundColor = "#e32727";
    image1.style.display = "none";
    text_cards1.style.display = "none";
    card1.appendChild(textElement1);
	textElement1.style.display = "grid";
    textElement1.innerHTML = "<p><b>YOU WANNA JOIN US ? </p>JUST PRESS THE TOP BUTTON</b><img class='image4' src='assets/money2.svg'>";
    textElement1.style.fontWeight = "300";
    textElement1.style.fontSize = "20px";
    textElement1.style.textAlign= "center";
    textElement1.style.color= "white";
    
});

card1.addEventListener('mouseout', function ()
{
    card1.style.backgroundColor = "white";
    image1.style.display = "inline";
    text_cards1.style.display = "block";
	textElement1.style.display = "none";
});


card2.addEventListener('mouseover', function ()
{
    card2.style.backgroundColor = "#e32727";
    image2.style.display = "none";
    text_cards2.style.display = "none";
    card2.appendChild(textElement2);
	textElement2.style.display = "grid";
    textElement2.innerHTML = "<p><b>YOU WANNA JOIN US ? </p>JUST PRESS THE TOP BUTTON</b><img class='image4' src='assets/money2.svg'>";
    textElement2.style.fontWeight = "300";
    textElement2.style.fontSize = "20px";
    textElement2.style.textAlign= "center";
    textElement2.style.color= "white";
});

card2.addEventListener('mouseout', function ()
{
    card2.style.backgroundColor = "white";
    image2.style.display = "inline";
    text_cards2.style.display = "block";
    textElement2.style.display = "none";
});

card3.addEventListener('mouseover', function ()
{
    card3.style.backgroundColor = "#e32727";
    image3.style.display = "none";
    text_cards3.style.display = "none";
    card3.appendChild(textElement3);
	textElement3.style.display = "grid";
    textElement3.innerHTML = "<p><b>YOU WANNA JOIN US ? </p>JUST PRESS THE TOP BUTTON</b><img class='image4' src='assets/money2.svg'>";
    textElement3.style.fontWeight = "300";
    textElement3.style.fontSize = "20px";
    textElement3.style.textAlign= "center";
    textElement3.style.color= "white";

});

card3.addEventListener('mouseout', function ()
{  
    card3.style.backgroundColor = "white";
    image3.style.display = "inline";
    text_cards3.style.display = "block";
    textElement3.style.display = "none";
});

card_container.addEventListener('mouseover', function ()
{
    card_container.style.backgroundColor = "#e32727";
});

card_container.addEventListener('mouseout', function ()
{  
    card_container.style.backgroundColor = "white";
});

marketing_button.addEventListener('click', function ()
{  
    window.scrollTo({
		top: 800,
		//bottom: 200,
		behavior: "smooth"
	});
});

BUTTON_homepage.addEventListener('click', function ()
{  
    window.scrollTo({
		top: 800,
		//bottom: 200,
		behavior: "smooth"
	});
});
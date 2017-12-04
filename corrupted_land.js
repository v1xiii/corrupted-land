var paragraph = document.createElement('p');
var textNode = document.createTextNode("You are accused of cosmic crimes by the GAMARO OF MAGNARAX. How do you plead?");
var gameText = document.getElementById("game");

var btn0 = document.getElementById("btn0"); 
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var btn0_content = document.createTextNode("GUILTY"); //creates the text node for the buttons
var btn1_content = document.createTextNode("INNOCENT");
var btn2_content = document.createTextNode("");
var btn3_content = document.createTextNode("");

function start() {

    document.getElementById("start_button").style.display = "none";

    paragraph.appendChild(textNode);
    gameText.appendChild(paragraph);

    btn0.appendChild(btn0_content);//appends the text node to the button
    btn1.appendChild(btn1_content);
    btn2.appendChild(btn2_content);
    btn3.appendChild(btn3_content);
}

var yourHPElement = document.getElementById("you");
var bossHPElement = document.getElementById("boss");
var yourHP = 100;
var bossHP = 1000;
var dice = Math.floor(Math.random()*10)+1;
var hit = dice;

function fight() {

    //var turn = "boss";
    btn0_content.textContent = "Attack";
    btn1_content.textContent = "Defend";
    btn2_content.textContent = "Item";
    btn3_content.textContent = "Inspect";

    buttonDisable();

    yourHPElement.textContent = yourHP; //displays hp value set in yourHP, implicit coercion?
    bossHPElement.textContent = bossHP;

    rollBoss()

    gameText.children[1].textContent = "You are to be executed. You are struck for " + hit + " damage but did not fall.";    

    btn0.onclick = rollYours;
    btn1.onclick = defend;
    btn2.onclick = item;
    btn3.onclick = inspect;

    setTimeout(function(){buttonEnable()}, 3000);

    gameText.children[1].textContent = "Take action.";    

}

function rollBoss() {
    yourHP = yourHP - hit;
    yourHPElement.textContent = yourHP;
    //turn = "yours";
}

function rollYours() {
    hit = dice;
    bossHP = bossHP - random();
    bossHPElement.textContent = bossHP;
    //turn = "boss";
}

function random() {
    return Math.floor(Math.random()*10)+1;
}



function buttonDisable() {
    btn0.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn0.style.backgroundColor = "grey";
    btn1.style.backgroundColor = "grey";
    btn2.style.backgroundColor = "grey";
    btn3.style.backgroundColor = "grey";
}

function buttonEnable() {
    btn0.disabled = false;
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn0.style.backgroundColor = "#EAC67A";
    btn1.style.backgroundColor = "#EAC67A";
    btn2.style.backgroundColor = "#EAC67A";
    btn3.style.backgroundColor = "#EAC67A";
}

function defend() {
    alert("Defend feature not yet added.");
}

function item() {
    alert("Item feature not yet added.");
}

function inspect() {
    setTimeout(function(){alert("Inspect feature not yet added.")}, 1000);
}

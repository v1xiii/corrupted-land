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
var dice = Math.floor(Math.random()*10)-1;

function fight() {

    btn0_content.textContent = "Attack";
    btn1_content.textContent = "Defend";
    btn2_content.textContent = "Item";
    btn3_content.textContent = "Inspect";

    yourHPElement.textContent = yourHP; //displays hp value set in yourHP, implicit coercion?
    bossHPElement.textContent = bossHP;

    gameText.children[1].textContent = "You are to be executed";
}   
       /* function fight() {

        var turn = "boss";

        function roll() {
            var hit = dice;
            if (turn === "boss") {
                yourHP = yourHP - hit;
                console.log(yourHP);
            }

            else {
               bossHP = bossHP - hit; 
            }
        }*/

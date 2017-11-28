function start() {

    document.getElementById("start_button").style.display = "none"; //hides start button

    var paragraph = document.createElement('p');
    var textNode = document.createTextNode("You are accused of cosmic crimes by the GAMARO OF MAGNARAX. How do you plead?");
    paragraph.appendChild(textNode);
    var gameText = document.getElementById("game");
    gameText.appendChild(paragraph);

    var btn0 = document.createElement("button"); //creates a button
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var btn3 = document.createElement("button");

    btn0.id = "btn0";
    btn1.id = "btn1";
    btn2.id = "btn2";
    btn3.id = "btn3";

    var btn0_content = document.createTextNode("GUILTY"); //creates the text node for the button
    var btn1_content = document.createTextNode("INNOCENT");
    var btn2_content = document.createTextNode("");
    var btn3_content = document.createTextNode("");

    btn0.appendChild(btn0_content);//appends the text node to the button
    btn1.appendChild(btn1_content);
    btn2.appendChild(btn2_content);
    btn3.appendChild(btn3_content);

    var button = document.getElementById("buttons");//selects the buttons div, adds that selection to a variable

    button.appendChild(btn0);//places the physical button in the buttons div
    button.appendChild(btn1);
    button.appendChild(btn2);
    button.appendChild(btn3);

    clicktest()

    function clicktest() {
        var go = 0;
        function varchange() {
            go = 1;
        }
        document.getElementById("btn0").onclick = varchange(); //these are the problem...
        document.getElementById("btn1").onclick = varchange();
        if (go === 1) {
           fight();
        }        
    }

    function fight() {

        var yourHPElement = document.getElementById("you");
        var bossHPElement = document.getElementById("boss");
        var yourHP = 100;
        var bossHP = 1000;

        var dice = Math.floor(Math.random()*10)-1;

        button.children[0].textContent = "Attack";
        button.children[1].textContent = "Defend";
        button.children[2].textContent = "Item";
        button.children[3].textContent = "Inspect";

        yourHPElement.textContent = yourHP;
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
}
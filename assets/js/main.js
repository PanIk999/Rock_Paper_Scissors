let currentRound = 1;
let rounds = document.getElementById("rounds");
const radioButtons = document.querySelectorAll('input[name="radio"]');
const btn = document.querySelector('#btn');
var x = document.getElementById("count");


// console.log(radioButtons[0].value);
rounds.addEventListener("change",  function(event){
    let round = event.target.value; 
    console.log(round); 
    document.querySelector("#count").innerHTML = 1;
    document.querySelector("#round").innerHTML = round;
    
});
btn.addEventListener("click", () => {
    let handSelection;
   
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            handSelection = radioButton.value;
            break;
        }
    }


    let comSel = Math.floor(Math.random() * 2) + 1;
    // show the output:
    if(handSelection == 1 && comSel == 1){
        output2.innerText = "You both chose Rocks!!!";
        document.querySelector(".mainGame").style.backgroundColor = 'pink';
        document.getElementById("myScore").innerHTML = +document.getElementById("myScore").innerHTML + 1;
        document.getElementById("herScore").innerHTML = +document.getElementById("herScore").innerHTML + 1;
    } else if(handSelection == 1 && comSel == 2){
        output2.innerText = "You lose! Paper Beats Rocks!!!";
        document.querySelector(".mainGame").style.backgroundColor = 'brown';
        document.getElementById("herScore").innerHTML = +document.getElementById("herScore").innerHTML + 1;
    } else if(handSelection == 1 && comSel == 3){
        output2.innerText = "You win! Rock Beats Scissors!!!";
        document.querySelector(".mainGame").style.backgroundColor = 'red';
        document.getElementById("myScore").innerHTML = +document.getElementById("myScore").innerHTML + 1;
    } else if(handSelection == 2 && comSel == 1){
        output2.innerText = "You win! Paper Beats Rocks!!!";
        document.querySelector(".mainGame").style.backgroundColor = 'red';
        document.getElementById("myScore").innerHTML = +document.getElementById("myScore").innerHTML + 1;
    } else if(handSelection == 2 && comSel == 2){
        output2.innerText = "You both chose Paper!!!";
        document.querySelector(".mainGame").style.backgroundColor = 'pink';
        document.getElementById("myScore").innerHTML = +document.getElementById("myScore").innerHTML + 1;
        document.getElementById("herScore").innerHTML = +document.getElementById("herScore").innerHTML + 1;
    } else if(handSelection == 2 && comSel == 3){
        output2.innerText = "You lose! Scissors Beats Paper!!!";
        document.querySelector(".mainGame").style.backgroundColor = 'brown';
        document.getElementById("herScore").innerHTML = +document.getElementById("herScore").innerHTML + 1;
    } else if(handSelection == 3 && comSel == 1){
        output2.innerText = "You lose! Rock Beats Scissors!!!";
        document.querySelector(".mainGame").style.backgroundColor = 'brown';
        document.getElementById("herScore").innerHTML = +document.getElementById("herScore").innerHTML + 1;
    } else if(handSelection == 3 && comSel == 2){
        output2.innerText = "You win! Scissors Beats Paper!!!";
        document.querySelector(".mainGame").style.backgroundColor = 'red';
        document.getElementById("myScore").innerHTML = +document.getElementById("myScore").innerHTML + 1;
    } else if(handSelection == 3 && comSel == 3){
        output2.innerText = "You both chose Scissors!!!";
        document.querySelector(".mainGame").style.backgroundColor = 'pink';
        document.getElementById("myScore").innerHTML = +document.getElementById("myScore").innerHTML + 1;
        document.getElementById("herScore").innerHTML = +document.getElementById("herScore").innerHTML + 1;
    }
      if(+document.getElementById("myScore").innerHTML == +document.getElementById("herScore").innerHTML && document.querySelector("#count").innerHTML == document.querySelector("#round").innerHTML){
        document.getElementById("message").innerHTML = 'Your game with the computer is a tie! <br>How bout a new Game<br> <button id="btn3" class="btn" onClick="window.location.reload();">Start New</button>'
      }
      if(+document.getElementById("myScore").innerHTML > +document.getElementById("herScore").innerHTML && document.querySelector("#count").innerHTML == document.querySelector("#round").innerHTML){
        document.getElementById("message").innerHTML = 'You are the winner! <br>How bout a new Game<br> <button id="btn3" class="btn"  onClick="window.location.reload();">Start New</button>'
      }
      if(+document.getElementById("myScore").innerHTML < +document.getElementById("herScore").innerHTML && document.querySelector("#count").innerHTML == document.querySelector("#round").innerHTML){
        document.getElementById("message").innerHTML = 'You have been destroyed! <br>How bout a new Game <button id="btn3" class="btn" onClick="window.location.reload();">Start New</button>'
      }
    x.innerHTML = +x.innerHTML + 1;
    if(+x.innerHTML > +document.querySelector("#round").innerHTML){
        +x.innerHTML == +document.querySelector("#round").innerHTML;
    }
});


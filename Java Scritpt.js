let players = [];

function MakePlayer()
{
    for (let index = 0; index < 10; index++) {
        console.log("Entet FirstName")
        alert("Enter information")
        let response = prompt("Name");
                 var player = {
               FirstName : response,
               score: 0,
               DiceRoll: 0,
          
         };
        players.push(player); 
        myfunction();
   
    }
   players.forEach(myfunction);
};

function  myfunction(player)
{
    player = {
        FirstName,
        score: 0,
   
  };
     document.getElementById("Java").innerHTML = players[i].FirstName;
    
};

 var x = players[i].score + 1;
 
    function Gameplay1()

    {   
        for (let index = 0; index < 3; index++) {
            console.log("rolling dice")
            alert("game is going")
            var Dice = Math.floor(Math.random(1)*6);
            player[i].DiceRoll = Dice;
            if(players[i].DiceRoll > players[i].DiceRoll)
            {
                players[i].score = x;
                return player[i].score;
            }
            if(players.score <= 0)
            {
                document.getElementById(players[i]).remove(player);
                document.getElementById("Java").innerHTML = players[i].FirstName;
    
            }
            if(players[i].count === 4)
            {
                Gameplay2()
            }
        }
    };

 
    function Gameplay2()

    {   
        for (let index = 0; index < 2; index++) {
            console.log("rolling dice")
            alert("game is going")
            var Dice = Math.floor(Math.random(1)*4);
            player[i].DiceRoll = Dice;
            if(players[i].DiceRoll > players[i].DiceRoll)
            {
                players[i].score = x;
                return player[i].score;
            }
            if(players.score <= 0)
            {
                document.getElementById(players[i]).remove(player);
                document.getElementById("Java").innerHTML = players[i].FirstName;
    
            }
            if(players[i].count === 2)
            {
                break;
            }
        }
    };

    function DiceShootOut()
    {    
        for (let index = 0; index <  4; index++) {
            console.log("Dice Shootout");
            alert("game on")
            var Dice =Math.floor(Math.random(1)*20);
            player[i].DiceRoll = Dice;
            if(players[i].DiceRoll > players[i].DiceRoll)
            {
                players[i] = x;
                document.getElementById("Java").innerHTML = players[i].FirstName;

            }
            if(players[i].score > players[i].score)
            {
                document.getElementById(players[i]).remove(player);
                document.getElementById("Java").innerHTML = players[i].FirstName;
            }
            if(players[i] === 1)
            {
                Console.log("You have won")
            }
                
            
            

            
        }
    }

         

 

 
 








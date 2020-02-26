let players = [];
function MakePlayer()
{
    for (let index = 0; index < 10; index++) {
        console.log("Entet FirstName")
        alert("Enter information")
        let reponse = prompt("Name");
                 var player = {
               FirstName : reponse,
               score: 0
         };
        players.push(player);
    }
}

 function DiceShootOut()
 {
     for (let index = 0; index < players.length; index++) {
         const element = players[index];

          player.Dice1 = Math.random(1)*20;

         if (player.Dice1 > player.Dice1)
    {
      console.log("You Lose")
      document.activeElement.remove(player);
      
    }
    else if (player.Dice1 === player.Dice1)
    {
      player.Dice1 = Math.random(1)*20;

    }   
     }
     
   
    return players
         

 }
 








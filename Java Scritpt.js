function MakePlayer()
{
    let player = {FirstName,Dice};
    Console.log("Wanna Play")
    let reponse = prompt("true or false");
    if (reponse === "true")
    {
        player = new player;
        document.getElementById("Java").innerHTML = "Lets Start the game!";
    }
}

function DiceShootOut()
{
  let Dice = console.log(Math.floor(Math.random()*20)+1);
    
    if(Dice > Dice)
    {
        console.log("You have won");
    }
    if (Dice < Dice)
    {
        console.log("You Lost!")
        .Remove(player)
    }
}


function MakePlayer()
{
    //let player = {FirstName,Dice};
    console.log("Entet FirstName")
    alert("Enter information")
    let reponse = prompt("Name");

        var player = {
            FirstName : reponse
        };
        document.getElementById("Java").innerHTML = reponse;
    
    return reponse
}

 function WinDiceShootOut()
 {
     var R = document.getElementsByName("mySelect");
 console.log(Math.floor(Math.random()*20)+1); 
  if(player.Dice > player.Dice) 
   {
     console.log("You have won this round");
   }
    if (player.Dice < player.Dice)
    {
       console.log("You have lost this round")
        R.remove(R.player);
    }       

   else if (player.Dice === player.Dice)
   {
    console.log(Math.floor(Math.random()*20)+1);   
     
   }


}




let coin=document.getElementById('coins');
let message=document.getElementById("msg");
let card=document.getElementById('cards');
let sm=document.getElementById('sum');
let sg=document.getElementById('start');  

let rst=document.getElementById('reset');

  let Coins=5000;
  let cards=[];
  let sum=0;

function reset()
{
  Coins=5000;
  cards=[];
  sum=0;
  coin.innerText="Coins: " +Coins;
  message.innerText="Want to play BlackJack?";
  card.innerText="Cards: ";
  sm.innerText='Sum: ';
  sg.innerText='Start Game';
}

function rendergame()
{
  let ncard=generatecard();    
  sum+=ncard;
  cards.push(ncard);
  print();
  checkresult();
}

function startgame()
{
  sg.innerText='Start New Game';
  sum=0;
  cards=[];
  if(Coins>0)
  {
    Coins-=500;
    coin.innerText="Coins: " +Coins;
    rendergame();
  }
  else alert("Not sufficient coins ! Reset the game");
}

function generatecard()
{
  let cardn=Math.floor(Math.random()*13)+1;
  if(cardn<2)
  {
    cardn=11;
  }
  else if(cardn>10)
  {
    cardn=10;
  }
  return cardn;
}

function print()
{
  let msgnew="";
  for(let i=0;i<cards.length;i++)
  {
    msgnew+=" "+cards[i];
  }
  card.innerText="Cards: "+msgnew;
  sm.innerText='Sum: '+sum;
}

function newcard()
{
  if(sum===0 || sum>21)
  {
    startgame();
  }
  else rendergame();
}

function checkresult()
{
  if(sum===21)
  {
    Coins+=1500;
    message.innerText="You have BlackJacked! and tripled your money ";
    coin.innerText="Coins: " +Coins;
  }
  else if(sum>21)
  {
    message.innerText="You lost your Money! Try Again"
  }
  else {
    message.innerText="Draw a New Card? or Quit?"
  }
}

function quit()
{
  if(sum<21 && sum>0)
  {
    Coins+=500;
    message.innerText="You Quit the game! Your money is refunded ";
    coin.innerText="Coins: " +Coins; 
  }
  sum=0;
}

//Create variables here
var dog,happyDog,database,foodS,foodStock,dogSprite;
var feedButton,addFoodButton,fedTime,lastFed,foodObj;
var readState;
var bedroom,garden,washroom,livingRoom;
var sadDogImg;

function preload()
{
	//load images here
  dog=loadImage('images/dogImg.png');
  happyDog=loadImage('images/dogImg1.png');
  bedroom = loadImage('virtual+pet+images/Bed Room.png')
  garden = loadImage('virtual+pet+images/Garden.png')
  washroom = loadImage('virtual+pet+images/Wash Room.png')
  sadDogImg = loadImage('virtual+pet+images/sadDog.png')
  livingRoom = loadImage('virtual+pet+images/Living Room.png')
}

function setup() {
	createCanvas(500, 500);
  dogSprite=createSprite(250,350,100,100);
  dogSprite.scale=0.4;
  dogSprite.addImage('dog',dog);
  foodStock=database.ref('food')
  foodStock.on('value',readStock);
foodObj = new Food();
//I forgot how to add buttons.
readState = database.ref('gameState')
readState.on("value",function(data){
  gameState = data.val
})
  
}


function draw() {  
background(rgb(46, 139, 87))
  drawSprites();
  foodObj.display();
  //add styles here

  if(gameState !== 'hungry'){

  }else{
    dogSprite.addImage('sad',sadDogImg)
  }
  if(gameState == 'happy'){
    dog.addImage('happy',happyDog);
  }
  if(gameState == 'bath'){
foodObj.washroom();
  }
  if(gameState == 'bedtime'){
    foodObj.bedroom();
  }
  if(gameState == 'park'){
    foodObj.garden();
  }
if(gameState == 'playtime'){
  foodObj.livingRoom();
}
}



function update(state){
  database.ref('/').update({
    gameState:state
  })
}


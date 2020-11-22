var canvas, backgroundImage;

var database;

var form,viewscrn;
var login=false;

var welcome,signup,signin,user,userready,vtruck;

var allUsers;

var truckInfo;
var truckarr=[];

var truckRegister;

var registerScreen;

var index=0;

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  welcome=new Welcome();
  welcome.display();
  user=new User();
truckRegister=new Register()
  
}


function draw(){
}
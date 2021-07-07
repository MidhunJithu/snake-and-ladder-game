document.getElementById("ply2control").style.visibility='hidden';
var curr=0;
var prev=-1;
var curr2=0;
var prev2=-1;
//delay timing function
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
   return true;
 }
 //function t start playing
 function start() {
    document.getElementById('audstart').play();
    document.getElementById('ltplyarea').style.visibility="visible";
    document.getElementById('rtplyarea').style.visibility="visible";
    document.getElementById('initbtn').style.display="none";
    document.getElementById('helpbtn').style.display="none";
    document.getElementById('ply1name').innerHTML=
     document.getElementById('p1').value;
    document.getElementById('ply2name').innerHTML=
     document.getElementById('p2').value;
    
    
}
function randgen() {
    return Math.floor((Math.random() * 6) + 1);
}
//function on player1 roll
function roll() {
    //toggling playbutton
    document.getElementById("ply2control").style.visibility='visible';
    document.getElementById("ply1control").style.visibility='hidden';
    document.getElementById('dice').classList.add('rollin');
    setTimeout(function(){ document.getElementById('dice').classList.remove('rollin'); }, 1000);
    var snake=0, ladder=0,overroll=0;
    
    var rollsound=document.getElementById('audroll');
    
    rollsound.playbackRate=2;
    wait(100);
    rollsound.play();
    //create a random number
    var roll= randgen();
    document.getElementById('demo').innerHTML="You Rolled a :"+ roll;
    if((curr==0 && roll!=1)){
        console.log('inside first');
        document.getElementById('demo').innerHTML="You need a 1 to get started::"+" you rolled a "+roll;
        document.getElementById("ply2control").style.display='block';
        return;
    }
    prev=curr;
    
    //update player location
    
    curr=curr+roll;
    
    //check if win condition is met

    if (curr>100) {
        curr=curr-roll;
        overroll+=1;
    }
    else if (curr==100) {
        document.getElementById('demo').innerHTML="win";
        document.getElementById('winnername').innerHTML=
         document.getElementById('p1').value +"  wins";
        document.getElementById('btn-hidden').click();
        document.getElementById('audwin').play();
       
    }
    else if (curr==12){
        curr=31;
        document.getElementById('audjump').play();
        ladder+=1;
        }
    else if (curr==25){
        curr=15;
        document.getElementById('audcatch').play();
        snake+=1;
        }
    else if (curr==35){
        curr=76;
        ladder+=1;
        document.getElementById('audjump').play();
    }
    else if (curr==21) {
        curr=42;
        ladder+=1;
        document.getElementById('audjump').play();
    }
    else if (curr==57) {
        curr=45;
        snake+=1;
        document.getElementById('audcatch').play();
    }
    else if (curr==61) {
        curr=81;
        ladder+=1;
        document.getElementById('audjump').play();
    }
    else if (curr==71) {
        curr=92;
        ladder+=1;
        document.getElementById('audjump').play();
    }
    else if (curr==74) {
        curr=53;
        snake+=1;
        document.getElementById('audcatch').play();
    }
    else if (curr==77) {
        curr=63;
        snake+=1;
        document.getElementById('audcatch').play();
    }
    else if (curr==99) {
        curr=38;
        snake+=1;
        document.getElementById('audcatch').play();
    }
    
    console.log("curr: "+curr);
    console.log("prev: "+prev);
    
    //display dice
    roll=roll.toString();
    var srcd="../assets/"+roll+".jfif";
    document.getElementById('dice').src=srcd;
    
   
    wait(500);
    
    
    //display token
    //route(curr);
    try {
        document.getElementById(curr).style.display='block';
    } catch (error) {}
    
    var id2= "2_"+curr;
     //check if token 1 in same position
     if (document.getElementById(id2).style.display=="block") {
        document.getElementById(id2).style.top="0px";
    }
    if (snake!=0) {
        document.getElementById('demo').innerHTML="OOps! SnAkE gOt YOu: MOveD tO "+ curr;
    }
    else if(ladder!=0){
        document.getElementById('demo').innerHTML="HuRRay!YOu ClImBEd LaDDer: MOveD tO "+ curr;
    }
    else if(overroll!=0){
        document.getElementById('demo').innerHTML="OHhh!! ThaT Waas CLoSe!! ";
    }
    else{
    document.getElementById('demo').innerHTML="Moved To "+ curr;
    }
    if (prev!==-1 && (roll==6 || ladder!==0) && snake===0 && overroll===0) {
        document.getElementById("ply2control").style.visibility='hidden';
        document.getElementById("ply1control").style.visibility='visible';
        document.getElementById('demo').innerHTML+="Hurray! You have got one more chance!!";
    }
    //hide previous token
    if (prev!=curr) {
        try {
            document.getElementById(prev).style.display='none';  
        } catch (error) {
            
        }
   
    }
   prev+=roll;
   
    
}
//roll second

function roll2() {
    var snake=0, ladder=0,overroll=0;
    //hide ply1 and display ply2
    document.getElementById("ply1control").style.visibility='visible';
    document.getElementById("ply2control").style.visibility='hidden';
    
    //add rolling effect to dice 2
    document.getElementById('dice2').classList.add('rollin');
    setTimeout(function(){ document.getElementById('dice2').classList.remove('rollin'); }, 1000);
    // audio on dice2 roll
    var rollsound=document.getElementById('audroll');
    rollsound.playbackRate=2;
    wait(100);
    rollsound.play();
    //generating random variable
    var roll2 = randgen();
    console.log("second roll is:"+roll2);
    //updating current and previous locations
   
    //check "1" for  first entry
    if((curr2==0 && roll2!=1)){
        console.log('inside first for second roll');
        document.getElementById('demo2').innerHTML="You need a 1 to get started::"+" you rolled a:"+roll2;
        document.getElementById("ply1control").style.display='block';
        return;
    }
    prev2=curr2;
    curr2+=roll2;
    //display dice2
    roll2=roll2.toString();
    var srcd="../assets/"+roll2+".jfif";
    document.getElementById('dice2').src=srcd;
    //display demo2 msg
    document.getElementById('demo2').innerHTML="You rolled a:"+roll2;
  
    //check for snakes and ladders
    if (curr2>100) {
        curr2=curr2-roll2;
        overroll+=1;
    }
    else if (curr2==100) {
        document.getElementById('demo').innerHTML="win";
        document.getElementById('winnername').innerHTML=
         document.getElementById('p2').value +"  wins";
        
        document.getElementById('btn-hidden').click();
       
    }
    else if (curr2==12){
        curr2=31;
        document.getElementById('audjump').play();
        ladder+=1;
        }
    else if (curr2==25){
        curr2=15;
        document.getElementById('audcatch').play();
        snake+=1;
        }
    else if (curr2==35){
        curr2=76;
        ladder+=1;
        document.getElementById('audjump').play();
    }
    else if (curr2==21) {
        curr2=42;
        ladder+=1;
        document.getElementById('audjump').play();
    }
    else if (curr2==57) {
        curr2=45;
        snake+=1;
        document.getElementById('audcatch').play();
    }
    else if (curr2==61) {
        curr2=81;
        ladder+=1;
        document.getElementById('audjump').play();
    }
    else if (curr2==71) {
        curr2=92;
        ladder+=1;
        document.getElementById('audjump').play();
    }
    else if (curr2==74) {
        curr2=53;
        snake+=1;
        document.getElementById('audcatch').play();
    }
    else if (curr2==77) {
        curr2=63;
        snake+=1;
        document.getElementById('audcatch').play();
    }
    else if (curr2==99) {
        curr2=38;
        snake+=1;
        document.getElementById('audcatch').play();
    }
      //display curr token
      wait(500);
      var id2="2_"+curr2;
      console.log(id2);
      try {
        document.getElementById(id2).style.display='block';
      } catch (error) {}
     
       //hide previous token
      var id2_prev="2_"+prev2;
      if (prev2!=curr2) {
       try {
           document.getElementById(id2_prev).style.display='none';  
      } catch (error) {}
      }
     
    //display messages
    if (snake!=0) {
        document.getElementById('demo2').innerHTML="OOps! SnAkE gOt YOu: MOveD tO "+ curr2;
    }
    else if(ladder!=0){
        document.getElementById('demo2').innerHTML="HuRRay!YOu ClImBEd LaDDer: MOveD tO "+ curr2;
    }
    else if(overroll!=0){
        document.getElementById('demo2').innerHTML="OHhh!! ThaT Waas CLoSe!! ";
    }
    else{
    document.getElementById('demo2').innerHTML="Moved To "+ curr2;
    }
    if (prev2!==-1 && (roll2==6 || ladder!==0) && snake===0 && overroll==0) {
        document.getElementById("ply1control").style.visibility='hidden';
        document.getElementById("ply2control").style.visibility='visible';
        document.getElementById('demo2').innerHTML+="Hurray! You have got one more chance!!";
    }
    //check if token 1 in same position
    if (document.getElementById(curr2).style.display=="block") {
        document.getElementById(curr2).style.top="0px";
    }
}


//path show function
function route(curr) {
    if(curr>1){
      for (let i = 1; i < curr; i++) {
        document.getElementById(i).style.display='block';
        
      }
    }
}

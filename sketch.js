

var slider;
var trunk=200;
var brno=document.getElementById('minlen').value;
var piby=document.getElementById('angle').value;
console.log(document.getElementById('minlen').value)
console.log(document.getElementById('angle').value);


document.getElementById('valbutton').onclick= function(){
  console.log(document.getElementById('minlen').value);
  console.log(document.getElementById('angle').value);
   brno=document.getElementById('minlen').value;
   piby=document.getElementById('angle').value;
   clear();

}




function setup() {

  createCanvas(1000,800);
  background(51);

}

function draw() {
//  var govangle=PI/6;
 //var givangle=document.getElementById('angle').value;
  //brno = slider.value();
 stroke(119, 234, 255);
 translate(width*0.5,height)
 branch(trunk);

}
 function branch(len){

     push();
     br=len*0.8;
     drawline(br,PI/piby);
     if(br>brno){
     branch(br);
      }
      pop();

   push();
   br=len*0.8;
   drawline(br,-PI/piby);
   if(br>brno){
   branch(br)
    }
   pop();

//   push();
  // br=len*0.8;/
//   drawline(br,0);
//   if(br>brno){
//   branch(br)
  //  }
  // pop();




 }

function drawline(len,angle) {
  if(len<trunk/4){
    stroke(226, 82, 242);
  }
  strokeWeight(0.2);
  line(0,0,0,-len);
  translate(0,-len);
  rotate(angle);

}

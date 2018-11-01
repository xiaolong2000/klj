 var timer;

 function startimer(speed){
     timer = window.setInterval(changeNum,speed);

 }
 
startimer(100);


var images=document.getElementById('images');
console.log(images1);
console.log(images2);
console.log(images2.children[3]);

var currentNo=0; 

function  changeNum()
 {
     h2obj.textContent=currentNo;
    if(currentNo<8) currentNo++;
   else  currentNo=0;    
   h2obj.textContent=currentNo;

   
 }
 
 var btnObj =document.getElementById('btnOjb')


function startChange()
{
    startimer(500);
    btnObj.textContent="停止";

}
function stopChange(){
     
    window.clearInterval(timer);
    btnObj.textContent="启动"
}
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);

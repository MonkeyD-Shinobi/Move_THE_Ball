import "./styles.css";

var container=document.getElementById('container');
var ball=document.getElementById('ball');

let num=container.getBoundingClientRect();

console.log(num);

let a=40;/// for moving left/right
// let s=40;
// let d=40;
let w=40;
document.addEventListener('keydown', function(event)
{
   console.log("key pressed" , event.keyCode);

   
   if(event.keyCode==87)
   {
    //top W

    if(w<=0)
    {
        return;
    }
    w-=10;
    ball.style.marginTop= w+'px';
   }

   else if(event.keyCode==83)
   {
      // for S
       if(w>=500)
       {
           return;
       }

           w+=10;
           ball.style.marginTop=w+'px';
   }

   else if(event.keyCode==65)
   {
    //for "A"
       if(a<=0)
       {
           return;
       }
    a-=10;
    ball.style.marginLeft=a+'px';

   }
   else if(event.keyCode==68)
   {
    //for "D"
    if(a>=1110)
    //    if(a>=710)
       {
           return ;
       }
    a+=10;
    ball.style.marginLeft=a+'px';
         }
});


/*var x=1;
a();
b();
console.log(x);

function a() {
    var x = 10 ;
    console.log(x);

}
function b(){
    var x=100;
    console.log(x);

}

var a =10;
function b(){
    var x=10;

}
//console.log(window.a);
console.log(a);
console.log(x);


function x(){
    for (var i=1; i<=5; i++){
        function close(i){
            setTimeout (function(){
                console.log(i);

            }, i*1000);
       }
       close(i);

    }
    console.log("Hello Oggy");
}
x();

function attachEventListeners(){
    let count = 0;
    document.getElementById("clickMe")
     .addEventListener("click",function  z(){
        console.log("Button Clicked", ++count);

    })
}
attachEventListeners();

console.log("Start");
document.getElementById("button")
.addEventListener("click", function callback(){


});
console.log("End")


var x= 1000;


console.log(x);

function first(){
    var x=("hello");
    console.log(x);

}

function second(){
    var x=("oggy");
    console.log(x);

}

 first();
 second();

 console.log("Start");

 setTimeout(function cb(){
    console.log("callback");


 } , 5000)*/

 console.log("Start");

 setTimeout(function cb(){
    console.log("Call back");

 }, 5000);

 console.log("End");

 let startDate = new Date().getTime();
 let endDate = startDate;
 while (endDate < startDate + 10000) {
    endDate = new Date().getTime();

 }
    
   console.log("While Expires");






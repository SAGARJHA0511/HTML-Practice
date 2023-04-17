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
console.log(x);*/


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


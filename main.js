function click(){
    var x ="This is a zero parameter";
    console.log(x);
}
click()

function add(a,b){
    console.log(a+b);
}
add(3,4)


var i = () =>{
 var x = 21;
 var girl = function () {
     console.log(x);
     var x = 20;
    };
 girl ();

}
i()

var j = () =>{
var x = 21;

console.log(x)
function girl() {
    console.log(x);
    var x = 20;
}
girl ();
}
j()



var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

let num = 5;
console.log("Factorial of " + num + " is " + factorial(num));
 



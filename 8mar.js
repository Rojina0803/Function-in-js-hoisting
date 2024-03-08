const day =()=>{
    return("Sunday");
}
console.log("Today is", day());

function square(number){
    return number * number;
}
console.log("The square of 3 is", square(3));

function average(z,y){
    return z+y/2;
}
console.log("The average of 2 and 3 is", average(2,3));

for(let i=18; i<=25; i++){

    const fix=(w,x)=>{
        return(w/x);
    }
    console.log("The value is", fix(i,i+1));

}


// passing object to a function

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); 
  myFunc(mycar);
  console.log(mycar.make); 
  
function car(mycars){
    mycars.make="Ferrari";
    mycars.model="The Mercedes-Benz B-Class"
    mycars.year="+++"
};
const mycarr={
    make:"????",
    model:"The Mercedes-Benz S-Class",
    year:"~~~"
};
console.log(mycarr.make);
car(mycarr);
console.log(mycarr.model);
car(mycarr);
console.log(mycarr.year);
car(mycarr);
console.log(mycarr.model);


function addTotalPriceOfCart( va1,val2,...num1){
    return num1;

}
console.log(addTotalPriceOfCart(200,3000,450,278));

const products={
    name:"Cheese",
    price:"300",
    quantity:"500gm",
    expirydate:"3days from MFG"
}

function handleObjects(anyobject){
    console.log(`The product is ${anyobject.name} and it's price is ${anyobject.price}`);
}
// handleObjects(products);
handleObjects({
    name:"Cheese",
    price:"300",
    quantity:"500gm",
    expirydate:"3days from MFG"

})
// passing an array to a function

const array=[2,3,4,5,6,7,8];
function getarrayy(arr){
    // return arr[0];
    return arr[3];
}
console.log(getarrayy(array));
// console.log(getarrayy([1,2,3,4,5,6,7]));


// first class function

function sum(){
  return function(){

  }
};
console.log(sum());

function jar(param1){
  return param1;
}
console.log(jar( function (){
}))

function happy(z){
  return z;
}
console.log(happy( function acc(){

}))

// Hoisting of a function

 console.log(hoist);
 hoist();
 function hoist(){
  console.log("Function is  beautiful");
 }
//  console.log(hoist)
//  hoist();

console.log(x)
var x= function(){
  console.log("YH")
};
  

var z= 7;
function yuu(){
  console.log("YUUUU")
}
console.log(z)
yuu();
console.log(yuu);
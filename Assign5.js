
// Do the below programs in arrow functions.

// Print odd numbers in an array

var OddNum=(yyy)=>{
  for(var g of yyy){
    if(g%2 !== 0){
      console.log(g);
    }
  }
}

OddNum([1,2,3,5,9,7,66,5,8]);

// Convert all the strings to title caps in a string array
var tyr=[],cvb=['artf',1,8,6,'Tndh','OV','gj',00];
StingOFFF=(jre)=>{
  for(var e of jre)
  {
    if(typeof e === 'string')
    {
      e=e.toUpperCase();
      tyr.push(e);
    }
    else{
      tyr.push(e);
    }
  }
  console.log(tyr);
}
StingOFFF(cvb);

// Sum of all numbers in an array


var sumOfN=(rr)=>{
  var iuy=0;
  for (var iterator of rr) {
     iuy=iuy + iterator;
    
  }
  console.log(iuy);
}

sumOfN([81,9]);
sumOfN([1,2,3,4,5,6,7,8,9]);
sumOfN([10,10,10]);
// Return all the prime numbers in an array


var summ = 0,jrr=[1,2,3,4,5,6,7,8,9,10,11,12,13],newjrr=[];
 PNumber=(qq)=> {
  for (var t = 0; t < qq.length; t++) {
    summ=0

    for(var p=1;p<=qq[t];p++)
    {
      if (qq[t] % p == 0) {
      summ = ++summ;
      if (summ > 2)
      break;      
    }
  }
  if (summ > 2) {} 
  else 
    newjrr.push(qq[t]);
}
 
  return newjrr;
}
console.log(PNumber(jrr));

// Return all the palindromes in an array


var hat=["eye",'ice','fruit','madam',"seen"],newHat=[];
var paal=(object)=>{for (const iterator of object) {
  if(iterator === iterator.split("").reverse().join(""))
  newHat.push(iterator);
}
return newHat;}
console.log(paal(hat));

// Do the below programs in function
//--------------------------------------------------------------------------------------------
// Print odd numbers in an array
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Modd(f) {
  for (const iterator of f) {
    if (iterator % 2 !== 0) console.log(iterator);
  }
}
Modd(arr1);
//----------------------------------------------------------------------------------------------

// Convert all the strings to title caps in a string array

var fruits = ["apple", "bannana", "grapes", "mango", "orange"];
var fruitsNew = [];
var jack;

function StringUspper(Arrr) {
  for (const o of Arrr) {
    jack = "";
    jack = o.toUpperCase();
    fruitsNew.push(o.toUpperCase());
  }
  return fruitsNew;
}
console.log(StringUspper(fruits));

// console.log(StringUspper(fruits));
//--------------------------------------------------------------------------------------------
// Sum of all numbers in an array

var arr2 = [3, 6, 9, 2, 5, 8, 7];
function SumofArr(oop) {
  var sum = 0;
  for (var k of oop) {
    sum = sum + k;
  }
  return sum;
}
console.log(SumofArr(arr2)); // OP=>  40

// Return all the prime numbers in an array
var summ = 0;
function PNumber(qq) {
  for (var t = 1; t <= qq; t++) {
    if (qq % t == 0) {
      summ = ++summ;
      if (summ > 2) {
        break;
      }
    }
  }
  if (summ > 2) {
    console.log(`the given number ${qq} is not a Prime number`);
  } else {
    console.log(`the given number ${qq} is Prime number`);
  }
}
PNumber(13);
PNumber(10);
//---------------------------------------------------------------------------
// Return all the palindromes in an array


var hat=["eye",'ice','fruit','madam',"seen"],newHat=[];
function paal(object){for (const iterator of object) {
  console.log(iterator === iterator.split("").reverse().join(""));
  if(iterator === iterator.split("").reverse().join(""))
  newHat.push(iterator);
}
return newHat;}

console.log(paal(hat));



// turn median of two sorted arrays of the same size.
// var trr=[1,2,3,5,7,9,6,2,7],trr1=[5,12,6,35,9,75,7,02,3],
var me=0,trry=[];


function twoARR(trr,trr1){
var ttr2=[...trr,...trr1];
for(var y of ttr2){
me=parseInt(y);
trry.push(me);// dear team this is getting pushed inside the array as an string please rectifie if possible
}
trry.sort()
console.log(trry);
var lent=trry.length/2;
console.log(trry[lent-1],trry[lent]);
}

twoARR([1,2,3,5,7,9,6,2,7],[5,12,6,35,9,75,7,02,3]);


// Remove duplicates from an array
var bun=[];
function dup(arr){
  arr.sort();
  for(var i in arr){
    bun.push(i); 
  if(arr[i]==arr[i+1]){
    i++;
  }
  }
  return bun;
}

console.log(dup([1,2,3,3,4,5,6,6,7]));


// Rotate an array by k times

var ar=[1,2,3,4,5,6,7,8,9,0],k=4;
function aro(r){
for (let i=0;i<k;i++) {
  r.unshift(r.pop());
}
return r;
}
console.log(aro(ar));
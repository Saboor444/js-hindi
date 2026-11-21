// let score="33abc"
// let score=  null 
//  let score=undefined
// let score=true
let score="hitesh"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof(valueInNumber));
// console.log(valueInNumber);   // NaN(33abc)
// console.log(valueInNumber);   // 0(null)
// console.log(valueInNumber);      //NaN(undefined)
// console.log(valueInNumber);      //1(true)
console.log(valueInNumber);    

//let isLoggedIn=1;     //TRUE
let isLoggedIn=""     //FALSE
//let isLoggedIn="SABOOR" //TRUE
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber=33

let stringnumber=String(someNumber)
console.log(stringnumber)
console.log(typeof stringnumber);

//***************************************  operations ******************* */

let value=2
let negvalue=-value
console.log(negvalue);

console.log(2**3);   //power

let str1="hello"
let str2=" saboor"
let str3=str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log(3+4*5%7);

console.log(true);
console.log(+true);
// console.log(true+);      //error   
console.log(+"");

let gamecounter=100
gamecounter++;
console.log(gamecounter);
++gamecounter;
console.log(gamecounter);








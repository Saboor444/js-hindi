// primitive

// 7 types: string,number,boolean,null,undefined,symbol,bigint

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let useremail;

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid);


//reference(non-primitive)

//array,objects,functions

const heros=["batman","spiderman","thor"]
let myobject={
    name:"hitesh",
    age:22,
}

const myfunction=function(){
    console.log("hello world")

}

console.log(typeof outsideTemp);
console.log(typeof myfunction);
console.log(typeof anotherid);

//****************************************************************//

//STACK MEMORY(PRIMITIVE) //pass by value ,HEAP(NON-PRIMITIVE) //pass by reference

let myyoutubename="hitesh"
let anothername=myyoutubename
anothername="chaiorcode"
console.log(myyoutubename)
console.log(anothername)


let userone={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userone

usertwo.email="hitesh@google.com"

console.log(userone.email)
console.log(usertwo.email)

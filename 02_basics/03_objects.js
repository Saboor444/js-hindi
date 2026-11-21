//singleton
//object.create

//object literals

const mySym=Symbol("key1")

const JsUser={
    name: "hitesh",
    "full name":"hitesh choudhary",          //cannot be accessed thropugh dot
    age:18,
    // mySym:"myKey1",                            //not using it as a symbol
    [mySym]:"myKey1",                            //use [ ] to use as a symbol
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser.full name)            //cannot be accessed thropugh dot
console.log(JsUser["full name"])
// console.log(JsUser["mySym"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym])

JsUser.email="hitesh@chatgpt.com"

console.log(JsUser.email);
// Object.freeze(JsUser)                       //no changes will happen

JsUser.email="hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS User")
}

JsUser.greetingtwo=function(){
    console.log(`Hello JS User,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())








//*********************************** PART 2 *********************** */

//const tinderUser=new Object()                                 //singleton object
const tinderUser={}                                           //non-singleton object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname :{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    },
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",  2:"b"}
const obj2={3:"c",  4:"d"}
const obj3={5:"e",  6:"f"}

// const obj=Object.assign(obj1,obj2,obj3).        //first object act as a destination
// console.log(obj)
// console.log(obj1)

// const obj3={obj1,obj2}
// const obj4=Object.assign({},obj1,obj2,obj3)

const obj4={...obj1,...obj2}
console.log(obj4)

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },

]

console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// ********************* PART 3 **************************************



const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor

const{courseInstructor:Instructor}=course
// console.log(courseInstructor)
console.log(Instructor)


// {
//     "name":"hitesh",                             //***API *****/
//     "coursename":"js in hindi",                  //*** JSON ****/
//     "price":"free"
// }


// [
//     {},
//     {},                                         //*** API in array format  */
//     {}
// ]


//randomuserme api
//json formatter to study api
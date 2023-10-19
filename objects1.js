const JSUser = 
{
    //internally object making
    name : "Sourin",
    title : "Mukherjee",
    age : 21,
    Email : "2105833@kiit.ac.in"
}

// console.log("Your Name is = " + JSUser.name);
// console.log("Your Title is = " + JSUser["title"]);

//externally object making
JSUser.course = "Javascript";

//freezing the object means you can't make changes in your object
// Object.freeze(JSUser);
// JSUser.course = "Python";       //No change for object freezing

JSUser.greeting = function()
{
    console.log("Hello Sir");
}

JSUser.greeting2 = function(name)
{
    console.log("Hello " + this.name);    //use this for accessing the one and only name present in object
}

// console.log(JSUser.greeting());
console.log(JSUser.greeting2());

const JSUser = 
{
    gmail : "Someone@gmail.com",
    age : 21,
    user_details : 
    {
        first_name : "Sourin",
        last_name : "Mukherjee"
    }
}

// console.log(JSUser.user_details.first_name);


//CONCATENATION OF OBJECTS
const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "c" , 4: "d"};
const obj3 = {5: "e" , 6: "f"};

console.log(JSUser.gmail);


// const obj4 = Object.assign({} , obj1 , obj2 , obj3);
// assign sums up all object in one 
// {} means all values are stored in a empty object then assign to obj4

// const obj4 = {...obj1 , ...obj2 , ...obj3};
// // '...' means it will spread the object then we merge it by ',' then assign to obj4
// console.log(obj4);



//accessing keys , values , entries via Objects
// console.log(Object.keys(JSUser));
// console.log("\n");
// console.log(Object.values(JSUser));
// console.log("\n");
// console.log(Object.entries(JSUser));
// console.log("\n");
// console.log(JSUser.hasOwnProperty('age'));
// console.log(JSUser.hasOwnProperty('year'));


//extracting value from objects outside
const {age} = JSUser;
console.log(age);
//object destructure
const {age : Age} = JSUser;
console.log(Age);





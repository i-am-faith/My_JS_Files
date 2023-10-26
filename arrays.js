// const arrays = [1,2,3,4,5,6,7,8,9];

const nums = new Array(1,2,3,4,5,6,7,8,9);

// add new number to the last 
// nums.push(10);



// add new number to the first 
// nums.unshift(0);



//delete last element
// console.log(nums.pop());



// delete first element 
// nums.shift();
// console.log(nums[0]);

const names1 = ['Sourin' , 'Ritam' , 'Tinni' , 'Dustu', 'Ritam'];



//search method
// console.log(names.indexOf('Ritam'));



//force search from any index
// console.log(names.indexOf('Ritam',2));



//backtrack search [search from last]
// console.log(names.lastIndexOf('Ritam'));



//include used to check datatypes present or not 
//it is not used for objects 
// console.log(names.includes('Sourin'));


let channels = 
[
    {
        name : 'Apna College',
        subs : 10000
    },
    {
        name : 'Apni Kaksha',
        subs : 20000
    },
    {
        name : 'Aman Dhattarwal',
        subs : 50000
    }
]

//find is a better replacement of includes
// console.log(channels.find(function(element)
// {
//     return element.subs === 50000;
// }
// ))



//Arrow Function  , It replaces function creation
// console.log(channels.find(element =>
// {
//     return element.subs === 50000;
// }
// ))

const names2 = ['Bubu' , 'Asmita' , 'Ritika' , 'Utkal', 'Suvra'];

//concatenation
// console.log(names.concat('Suvo', 'Somnath'));
// console.log(names1.concat(names2));
// let names3 = names1.concat(names2);
// console.log(names3);



//slice operator
// console.log(names3.slice(3,7));



//spread operator
let names4 = [...names1,...names2];
// console.log(names4);




//for loop
// for(let i=0;i<names4.length;i++)
// {
//     console.log(names4[i]);
// }




// for of loop 
// for(let names_all of names4)
// {
//     console.log(names_all);
// }



//Join Method
let student = ['S' , 'O' , 'U' , 'R' , 'I' , 'N'];
// console.log(student.join());
// //using separator in Join Method -> separater are passed by value using join method
// console.log(student.join(''));


// student_real = student.join(' ');
// console.log(student_real);
// //Split Method
// console.log(student_real.split(' '));

let cities = 
[
    {name : 'Mumbai' , population : 20000000},
    {name : 'Delhi' , population : 30000000},
    {name : 'Kolkata' , population: 15000000},
    {name: 'Chennai' , population: 25000000}
];


//filter method , it is used for modifed search
// console.log(cities.filter(cities => cities.population > 20000000))



//map function , it is used for changing value at a time for all
// console.log(cities.map(cities => cities.population * 2))






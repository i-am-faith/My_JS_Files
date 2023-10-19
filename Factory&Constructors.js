//Factory Functions

// function createCourse (title)
// {
//     return 
//     {
//         title : title,
//         enroll()
//         {
//         console.log("Enrolled");
//         }
//     }
// }

// const course = createCourse('JS');
// course.enroll();
// console.log(course);



//Constructors

// function Course (title)
// {
//     this.title = title,
//     this.enroll = function()
//     {
//         console.log("Enrolled");
//     }
// }

// const newCourse = new Course('JS');
// newCourse.enroll();




// //making a function as a constuctor using Function keyword (NOT fucntion)

// const Course_1 = new Function ('title' , `
// this.title = title,
// this.enroll = function()
//     {
//         console.log("Enrolled");
//     }
// `)

// const course_2 = new Course_1('JS');
// course_2.enroll();




//call by reference 
let obj = {number : 10};
let obj2 = obj;

console.log(obj);
console.log(obj2);


//call by value

const course = 
{
    title : "JS",
    enroll()
    {
    console.log("Enrolled");
    }
}

const Course_1 = {...course}
Course_1.title = "C++";
console.log(course);
console.log(Course_1);
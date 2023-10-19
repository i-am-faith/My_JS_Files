let x = document.querySelector('button');
x.addEventListener('click', inputmsg);

// function show()
// {
//     alert("Hello World!!");
// }

function inputmsg()
{
    let name = prompt("Enter name of the student");
    x.textContent = "Roll No 1: " + name;
}

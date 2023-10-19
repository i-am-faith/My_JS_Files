/*
const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ["Happy Birthday" , "Jay Shree Ram" , "Happy Mahalaya" , "Ohh ki lagche"];
let x = prompt("Enter keyword to search = ");

for(let i=0;i<greetings.length;i++)
{
    if(greetings[i].indexOf(x) != -1)
    {
        let listitem = document.createElement("li");
        listitem.textContent = greetings[i];
        list.appendChild(listitem);
    }
}

*/


const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ["Happy Birthday" , "Jay Shree Ram" , "Happy Mahalaya" , "Ohh ki lagche"];
let x = prompt("Enter keyword to search = ");

for(let i=0;i<greetings.length;i++)
{
    if(greetings[i].indexOf(x) != -1)
    {
        let listitem = document.createElement("li");
        listitem.textContent = greetings[i];
        list.appendChild(listitem);
    }
}
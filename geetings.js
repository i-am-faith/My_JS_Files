const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ["Happy Birthday!" , "Nice Shoes" , "Happy Durgapuja" , "Durga Maa ki jai" , "Happy Diwali" , "Joy maa Durga", "Happy Holy"];

// for(let i=0;i<greetings[i];i++)
// {
//     if(greetings[i].indexOf("Durga") != -1)
//     {
//         let listitem = document.createElement('li');
//         listitem.textContent = greetings[i];
//         list.appendChild(listitem);
//     }
// }

for(let i=0;i<greetings.length;i++)
{
    if(greetings[i].indexOf("Durga") != -1)
    {
        let listitem = document.createElement("li");
        listitem.textContent = greetings[i];
        list.appendChild(listitem);
    }
}
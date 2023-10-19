const list = document.querySelector('.output ul');
//selecting from ul parent output class
list.innerHTML = '';
let cities = ['mumBai' , 'DelHi' , 'JAIpur' , 'KOLkaTA'];
//given an array

for(let i=0;i<cities.length;i++)
{
    let lowercity = cities[i].toLowerCase();        //lowercasing
    let fa = lowercity.slice(0,1);                  //selecting the first letter
    lowercity = lowercity.replace(fa,fa.toUpperCase()); //Capitaling First Letter
    let listitem = document.createElement('li');        //creating listitem as a object via li
    listitem.textContent = lowercity;               //giving data to listitem
    list.appendChild(listitem);                     //appending data from child
}
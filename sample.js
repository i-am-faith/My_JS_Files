// var x = prompt("Enter X = ");
// var y = prompt("Enter Y = ");

// var c = x+y;
// c 
// alert("Result = " + c);

// var time = prompt("Whats the time = ");
// if(time > 5 && time < 17)
// {
//     alert("Good Morning");
// }

// else
// {
//     alert("Good Evening");
// }

var fruit_type = prompt("Enter Fruit Name = ");

switch (fruit_type)
{
    case 'Orange' :
        alert("60/KG");
        break;

    case 'lime':
        alert("20/KG");
        break;

    case 'Mango':
        alert("65/KG");
        break;

    default:
        alert("Stock Out");
        break;
}
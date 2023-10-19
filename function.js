// function america()
// {
//     console.log("America");
// }

// function india()
// {
//     console.log("India");
// }

// function russia()
// {
//     console.log("Russia");
// }

// console.log("My Country = ");
// india();



function country(cn)
{
    if(cn == "india")
    {
        alert("India");
    }

    else if(cn == america)
    {
        alert("America");
    }

    else
    {
        alert("Other Country");
    }
}

let x = prompt("Enter Country = ");
country(x);
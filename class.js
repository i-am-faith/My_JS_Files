// declaring a class

class Item
{
    //class will include a contructor function
    constructor (name)
    {
        this.name = name;
        // this.id = id;
        // this.price = price;
        // this.discount = discount;
    }

    get getItemname ()
    {
        return this.name + "Is a Product";
    }
}

class Furniture extends Item
{
    constructor (name)
    {
        super(name);
    }

    get getItemname ()
    {
        return this.name + ", It is a furniture";
    }
}

let chair = new Furniture('Chair');
console.log(chair.getItemname);

// // let pencil = new Item('Pencil' , 833 , 5 , 55);

// // console.log(pencil.id);

// //making class with expression

// const Prouct1 = class 
// {
//     constructor (name , id , price , discount)
//     {
//         this.name = name;
//         this.id = id;
//         this.price = price;
//         this.discount = discount;
//     }

//     //getters and setters make function as values
//     //no need to use paranthesis

//     get getPrice()
//     {
//         return this.price;
//     }

//     set setPrice (Price)
//     {
//         this.price = Price;
//     }

//     discountValue()
//     {
//         return this.discount*this.price/100
//     }
// }

// let chair = new Prouct1('chair' , 234 , 60 , 5);

// // console.log(chair.discount);
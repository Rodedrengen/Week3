//Ex 1
let names = ["Ji","Danica Manning","Hazel Dawson","Lorenzo Jefferson","An","Zainab Moss","Anita Harrell","Te","Harleigh Roberson","Zackary Mccarty"];

names.forEach(element => console.log(element));

let longNames = names.filter(function(name){
    return name.length >= 3;
})

console.log("-------------------------------");

longNames.forEach(element => console.log(element));

//Ex 2

console.log("-------------------------------");

let longBigNames = longNames.map(function(names){
    return names.toUpperCase();
});

longBigNames.forEach(element => console.log(element));

//Ex 3

console.log("-------------------------------");

function htmlList(names){
    
    let newNames = names.map(function(name){
        return "<li>" + name + "</li>"; 
    });
    
    newNames.push("</ul>");
    newNames.unshift("<ul>");
    
    newNames = newNames.join("");
    
    return newNames;
}

console.log(htmlList(longBigNames));

//Ex 4

console.log("-------------------------------");

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let newCars = cars.filter(function(car){
    return car.year > 1999;
});
let onlyVolvos = cars.filter(function(car){
    return car.make === "Volvo";
});
let cheapCars = cars.filter(function(car){
    return car.price < 5000;
});

newCars.forEach(element => console.log(element.year+ " " + element.make + " " + element.model + " " + element.price));
console.log("---");
onlyVolvos.forEach(element => console.log(element.year+ " " + element.make + " " + element.model + " " + element.price));
console.log("---");
cheapCars.forEach(element => console.log(element.year+ " " + element.make + " " + element.model + " " + element.price));

//Ex 4a

console.log("-------------------------------");

function SQLStatement(cars){
    let returnCars = cars.map(function(car){
       return "INSERT INTO cars (id,year,make,model,price) VALUES (" + car.id + " , "+ car.year + ", " + car.make + ", " + car.model+ ", " + car.price + ");";
    });
    return returnCars.join("\n");
}

let sql = SQLStatement(cars);
console.log(sql);

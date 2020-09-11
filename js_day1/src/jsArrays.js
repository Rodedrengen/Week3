//A
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//Concat creates a new array that is concated of the two arrays. 

//B
var all = boys.concat(girls);
console.log(all);
all = [...boys, ...girls];
console.log(all);

//C
var commaSep = all.join();
console.log(commaSep);
var hypSep = all.join('-');
console.log(hypSep);

//D
//all.push('Lone ','Gitte ')
girls = [...girls,'Lone','Gitte'];
console.log(girls);

//E
boys = ["Hans","Kurt",...boys];
console.log(boys);

//F
boys.shift();
console.log(boys);
//G
girls.pop();
console.log(girls);

//H
console.log("Opgave h");
all.splice(2,2);
console.log(all);

//I
all.reverse();
console.log(all);

//j
all.sort();
console.log(all);

//k
all.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(all);

//L
console.log("Opgave L");
let upper = all.map(function(str){
    return str.toUpperCase();
});
console.log(upper);

//M 
all = [...boys,...girls];
let filtered = all.filter(function(name){
    name = name + "";
    return name.charAt(0) === 'l' || name.charAt(0) === 'L';
});
console.log(filtered);

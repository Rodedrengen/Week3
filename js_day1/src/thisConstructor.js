function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this
  },2000);
}
//call it like this (do it, even if you know it’s silly ;-)
var p = Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this


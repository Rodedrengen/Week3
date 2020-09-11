//Ex 1
function add(n1, n2){
   return n1 +n2;
};

let sub = function(n1,n2){
  return n1 - n2;
};
//Ex 4
function mul(n1, n2){
    return n1 * n2;
}

//let cb = function(n1,n2, callback){
//  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
//};


//Ex 3
let cb = function(n1,n2, callback){
    try{
        if(typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function"){
         return "Result from the two numbers: "+n1+" and "+n2+" = "+callback(n1,n2);
    }else{
        throw new Error("Whoops");
    }
    }catch(e){
         console.error(e.name + ': ' + e.message)
    }
    
 
};

//Ex 2
console.log( add(1,2) );    // This prints the return value from add with the parameters 1 and 2 = 3
console.log( add )      ;   // The prints the reference to the function add - in this case the whole function
console.log( add(1,2,3) ) ; // This prints the return value from add witht he parameters 1 and 2, 3 is dropped = 3
console.log( add(1) );      // This will return an error of somekind because the 2nd parameter is undefined
console.log( cb(3,3,add) ); // This will print "Result from the two numbers 3 + 3 = 6. Becuase it calls the reference add with 3 and 3
console.log( cb(4,3,sub) ); // This will print "Result from  the two numbers 4 + 3 = 1. Becuase it call the reference sub with 4 and 3
console.log(cb(3,3,add())); // This will print somekind of error. It calls the function add with two undefined parameters. 
console.log(cb(3,"hh",add));// This will print "Result form the two numbers 3 + hh = 3hh. Becuase it concacts the two variable. 

//Ex 4
console.log(cb(3,3,mul));

//Ex 5
console.log(cb(9,3,function(n1,n2){
    return n1 / n2;
}))


const add =(value1,value2)=>{
    return value1 + value2;
}

let recievedResult = add(50,50);
    console.log(recievedResult);

definationHoisted();

definationNotHoisted();

function definationHoisted(){
    console.log("I am hoisted");
};

var definationNotHoisted = function(){
    console.log("I am not hoisted");
};
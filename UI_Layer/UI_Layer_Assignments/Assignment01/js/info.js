

const person ={ name:"Rohan" ,surname:"Shingate" };

//console.log(person);

function personDetails(){
    return person.name+ " " +person.surname;
}

function personDetails2(a,b){
    this.a=a;
    this.b=b;
   
    return a+" "+b;
}

module.exports.personDetails=personDetails;

module.exports.personDetails2=personDetails2;

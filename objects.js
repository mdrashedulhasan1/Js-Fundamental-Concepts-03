var personInfo = {id:1, name:"Tapu", phone:"23453465"};
var personInfo2 = {id:2, name:"Rashedul", phone:"32434645"}

console.log(personInfo);
console.log(personInfo2);

personInfo.id = 2;
personInfo.name = "Rashedul";

personInfo2["id"] = 1;
personInfo2["name"] = "Tapu";

console.log(personInfo);
console.log(personInfo2);
const accountId=14453
let accountEmail="abc@gmail.com"
var accountPassword="12345"
accountCity="jAIPUR"
let accountState;

// accountId=2  //not allowed
// prefer not to use var 
// because of issue in block and functional scope
 
console.log(accountId);
accountEmail="xyz@gmail.com"
accountPassword="12300"
accountCity="delhi"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
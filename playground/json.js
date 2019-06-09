const fs = require('fs');
var info = {
    Fname: 'yasser',
    Lname: 'Tarek',
    age: 21,
    mail:'yassertarek98@gmail.com'
}
var jsonInfo = JSON.stringify(info);
fs.writeFileSync('info.json',jsonInfo);
// console.log(jsonInfo);




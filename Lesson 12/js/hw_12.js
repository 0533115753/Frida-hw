var conf = true;
const Users = [];
const Firsts = [];
const Lasts = [];
const Idis = [];

while (conf == true) {
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var Id = prompt("Enter your ID number");
    Users.push(creatUserObj(firstName, lastName, Id));
    conf = window.confirm("Do you want enter another user?");
}

function creatUserObj(x, y, z) {
    const userObj ={};
    userObj.firstName = x;
    userObj.lastName = y;
    userObj.Id = z;
    return userObj;
}

Firsts.push(Users[0]);
Lasts.push(Users[0]);
Idis.push(Users[0]);

sortBy(Firsts, firstName);
sortBy(Lasts, lastName);
sortBy(Idis, Id);

function sortBy(array, ?) {
    for(let i = 1; i < Users.length; i++) {
        let j =array.length-1;
        for(; j < array.length && j >= 0; j--) {
            let obj = Users[i];
            let lastObj = Firsts[j];
            if(obj.? > lastObj.?) {
            array.splice((j+1), 0, obj);
            break; 
            } else {
                if((j) == 0) {
                    array.splice(0, 0, obj);
                }
            }
        }
    }
}

console.log(Users);
console.log(Firsts, Lasts, Idis);










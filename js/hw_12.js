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


// sortBy(Firsts, firstName);
// sortBy(Lasts, lastName);
// sortBy(Idis, Id);

// function sortBy(array) {
    for(let i = 1; i < Users.length; i++) {
        let j =Firsts.length-1;
        for(; j < Firsts.length && j >= 0; j--) {
            let obj = Users[i];
            let lastObj = Firsts[j];
            if(obj.firstName > lastObj.firstName) {
            Firsts.splice((j+1), 0, obj);
            break; 
            } else {
                if((j) == 0) {
                    Firsts.splice(0, 0, obj);
                }
            }
        }
    }
// }

for(let i = 1; i < Users.length; i++) {
    let j =Lasts.length-1;
    for(; j < Lasts.length && j >= 0; j--) {
        let obj = Users[i];
        let lastObj = Lasts[j];
        if(obj.lastName > lastObj.lastName) {
        Lasts.splice((j+1), 0, obj);
        break; 
        } else {
            if((j) == 0) {
                Lasts.splice(0, 0, obj);
            }
        }
    }
}

for(let i = 1; i < Users.length; i++) {
    let j =Idis.length-1;
    for(; j < Idis.length && j >= 0; j--) {
        let obj = Users[i];
        let lastObj = Idis[j];
        if(obj.Id > lastObj.Id) {
        Idis.splice((j+1), 0, obj);
        break; 
        } else {
            if((j) == 0) {
                Idis.splice(0, 0, obj);
            }
        }
    }
}

console.log(Users);
console.log(Firsts, Lasts, Idis);










function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value ==="Admin"){
            admins.push(key)
        }
    }
    return admins;
}

const users = new Map();
users.set("Tiago", "Desenvolvedor");
users.set("André", "Admin");
users.set("Simone", "Admin");
users.set("Vitor", "Usuario");

console.log(getAdmins(users))
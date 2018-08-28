class Users{
    constructor(){
        this.users = [];
    }
    addUser(id, name, room){
        var user = {id,name,room};
        this.users.push(user);
    }
}

module.exports ={
    Users
}
// [{
//     id: 
// }]
// var addUser = (id, name, room)=>{
// }

// var removeUser = (id) =>{

// }

// var getUser = (id) =>{

// }

// var getUserList = (room)=>{
// }

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     getUserDescription(){
//         return `${this.age} is ${this.age} year(s) old`;
//     }
// }


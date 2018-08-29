class Users{
    constructor(){
        this.users = [];
    }
    addUser(id, name, room){
        var user = {id,name,room};
        this.users.push(user);
    }

    removeUser(id){
        var userFound;
        var newList = this.users.filter((user) =>{
            if(user.id === id){
                userFound = user; 
            }else{
                return user;
            }
           
        });
        
        this.users = newList;
        return userFound;
    }

    getUser(id){
        var userFound = this.users.filter((user) =>{
            return user.id === id;
        });
        return userFound[0];
    }

    getUserList(room){
        var users = this.users.filter((user) =>{
            return user.room === room;
        });
        var nameArray = users.map((user) =>{
            return user.name;
        });

        return nameArray;
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


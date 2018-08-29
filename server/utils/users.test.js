const expect = require('expect'); 

const {Users} = require('./users');

var users;

beforeEach(() =>{
    users = new Users();
    users.users = [{
        id: 1,
        name: 'Mike',
        room: 'The Room'
    },{
        id: 2,
        name: 'Joe',
        room: 'The Other Room'
    },{
        id: 3,
        name: 'Jen',
        room: 'The Room'
    }];
});

describe('Users', ()=>{
    it('should add new user', ()=>{
        var users = new Users();
        var user = {
            id: 123,
            name: 'Bálint',
            room: 'The Room'
        }
        users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);

    });

    it('should return names of The Room users', ()=>{
        var result = users.getUserList('The Room');
        expect(result.length).toEqual(2);
        expect(result).toEqual(['Mike', 'Jen']);

    });

    it('should return names of The Other Room users', ()=>{
        var result = users.getUserList('The Other Room');
        expect(result.length).toEqual(1);
        expect(result).toEqual(['Joe']);

    });

    it('should remove a user', () =>{
        var removedUser = users.removeUser(users.users[0].id);
        expect(removedUser.name).toEqual('Mike');
        expect(users.users.length).toEqual(2);
        
    });

    it('should not remove a user', () =>{
        var removedUser = users.removeUser(23);
        expect(removedUser).toNotExist();
    });

    it('should find user', () =>{
        var userFound = users.getUser(users.users[0].id);
        expect(userFound.name).toEqual('Mike');

    });

    it('should not find user if it is not member of any room', () =>{
        var userFound = users.getUser(23);
        expect(userFound).toNotExist();


    });
});
const expect = require('expect');

var {generateMessage} = require('./message');

describe('Generate message', () =>{
    it('should return an object with the parameters sent', () =>{
        var from = 'asd@asd.com';
        var text = 'asdsad';
        var res = generateMessage(from, text);
        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(res.createdAt).toBeA('number');

    });

});
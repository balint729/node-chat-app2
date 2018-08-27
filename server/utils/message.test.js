const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('Generate location message', () =>{
    it('should generate correct location object with the parameters sent', () =>{
        var from = 'asd@asd.com';
        var latitude = 1;
        var longitude = 1;
        var res = generateLocationMessage(from, latitude, longitude);
        expect(res.from).toBe(from);
        expect(res.url).toBe('https://www.google.com/maps?q1,1');
        expect(res.createdAt).toBeA('number');

    });

});
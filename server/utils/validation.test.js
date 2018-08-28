const expect = require('expect'); 

const {isRealString} = require('./validation');

describe('isRealString // string validation', () =>{
    it('should throw error if non-string is passed', () =>{
        var result = isRealString(2);
        expect(result).toBe(false);
    });

    it('should throw error if empty string is passed', () =>{
        var result = isRealString('');
        expect(result).toBe(false);
    });

    it('should allow string with correct props', () =>{
        var result = isRealString('Test a ');
        expect(result).toBe(true);
    });
});
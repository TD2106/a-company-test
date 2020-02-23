import * as chai from 'chai';
import { isStringContentEqual, splitCamelCaseString } from './utils';

describe('isStringContentEqual', () => {
    test('should return true if two string are equal regardless of the character case, white spaces', () => {
        chai.expect(isStringContentEqual('HELLO', 'hell o')).to.be.true;
        chai.expect(isStringContentEqual('HEl lO', 'h ello')).to.be.true;
        chai.expect(isStringContentEqual('hE LL O', 'H eLlo')).to.be.true;
    });

    test('should return false if two string are not equal regardless of the character case', () => {
        chai.expect(isStringContentEqual('world', 'hello')).to.be.false;
        chai.expect(isStringContentEqual('World', 'hello')).to.be.false;
        chai.expect(isStringContentEqual('WOrlD', 'heLlo')).to.be.false;
    });
});

describe('splitCamelCaseString', () => {
    test('should be able to split camel case word into a string with separate words', () => {
        chai.expect(splitCamelCaseString('BusinessCenter')).to.equal(
            'business center',
        );
        chai.expect(splitCamelCaseString('DryCleaning')).to.equal(
            'dry cleaning',
        );
    });
});

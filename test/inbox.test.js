const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

class Car{
    park(){
        return 'stopped';
    }
    drive(){
        return 'goog';
    }
}
let car  ;
beforeEach(() =>{
    car = new Car();
});

describe('Car',() => {
    it('test park' , () =>{
        assert.equal(car.park() , "stopped");
    });

    it('test drive' , () =>{
        assert.equal(car.drive() , "goog");
    });

});
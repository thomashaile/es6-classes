// the challenge

const literal1 = {
    state: {
        evens: [],
        odds: [],
        nanys: []
    },
    addString: function(newStr) {
        // ... code ...


        if (!isNaN(newStr)) {
            if (newStr % 2 === 0) {
                this.state.evens.push(newStr);
            } else {
                this.state.odds.push(newStr);
            }
        } else {
            this.state.nanys.push(newStr);
        }
    },
    all: function(selection) {
        // ... code ...
        return this.state[selection];
    }
};

const literal2 = {
    state: {
        evens: [],
        odds: [],
        nanys: []
    },
    addString: function(newStr) {
        // ... code ...


        if (!isNaN(newStr)) {
            if (newStr % 2 === 0) {
                this.state.evens.push(newStr);
            } else {
                this.state.odds.push(newStr);
            }
        } else {
            this.state.nanys.push(newStr);
        }
    },
    all: function(selection) {

        return this.state[selection];
    }
};

// the solution
class Stringanizer {
    state = {
        evens: [],
        odds: [],
        nanys: []
    };
    constructor(evens, odds, nanys) {

        this.state.evens = evens;
        this.state.odds = odds;
        this.state.nanys = nanys;
    }
    addString(newStr) {
        // ... code ...


        if (!isNaN(newStr)) {
            if (newStr % 2 === 0) {
                this.state.evens.push(newStr);
            } else {
                this.state.odds.push(newStr);
            }
        } else {
            this.state.nanys.push(newStr);
        }
    };
    all(selection) {
        // ... code ...
        return this.state[selection];
    }

}

// the tests
debugger;
const instanceA = new Stringanizer(["2", ""], ["3"], ["e"]);
const instanceB = new Stringanizer(["-0"], ["5"], ["!"]);

const test1a = instanceA instanceof Stringanizer;
const test1b = instanceB instanceof Stringanizer;
console.assert(test1a, 'Test 1.A - instanceof');
console.assert(test1b, 'Test 1.B ');

const test2a = instanceA.hasOwnProperty('state');
const test2b = instanceB.hasOwnProperty('state');
console.assert(test2a, 'Test 2.A - own properties');
console.assert(test2b, 'Test 2.B');

const test3a = !instanceA.hasOwnProperty('addString') && !instanceA.hasOwnProperty('all');
const test3b = !instanceB.hasOwnProperty('addString') && !instanceB.hasOwnProperty('all');
console.assert(test3a, 'Test 3.A - not-own properties');
console.assert(test3b, 'Test 3.B');

const test4a = JSON.stringify(instanceA.state) === '{"evens":["2",""],"odds":["3"],"nanys":["e"]}';
const test4b = JSON.stringify(instanceB.state) === '{"evens":["-0"],"odds":["5"],"nanys":["!"]}';
console.assert(test4a, 'Test 4.A - initial values');
console.assert(test4b, 'Test 4.B');

const test5a = instanceA.all("evens").toString() === '2,';
const test5b = instanceB.all("evens").toString() === '-0';
console.assert(test5a, 'Test 5.A - .all("evens")');
console.assert(test5b, 'Test 5.B');

const test6a = instanceA.all("odds").toString() === '3';
const test6b = instanceB.all("odds").toString() === '5';
console.assert(test6a, 'Test 6.A - .all("odds")');
console.assert(test6b, 'Test 6.B');

const test7a = instanceA.all("nanys").toString() === 'e';
const test7b = instanceB.all("nanys").toString() === '!';
console.assert(test7a, 'Test 7.A - .all("nanys")');
console.assert(test7b, 'Test 7.B');

instanceA.addString('*');
instanceA.addString('1');
instanceA.addString('12');

instanceB.addString('8');
instanceB.addString('I0');
instanceB.addString('9');

const test8a = JSON.stringify(instanceA.state) === '{"evens":["2","","12"],"odds":["3","1"],"nanys":["e","*"]}';
const test8b = JSON.stringify(instanceB.state) === '{"evens":["-0","8"],"odds":["5","9"],"nanys":["!","I0"]}';
console.assert(test8a, 'Test 8.A - new values');
console.assert(test8b, 'Test 8.B');

const test9a = instanceA.all("evens").toString() === '2,,12';
const test9b = instanceB.all("evens").toString() === '-0,8';
console.assert(test9a, 'Test 9.A - .all("evens")');
console.assert(test9b, 'Testt 9.B');

const test10a = instanceA.all("odds").toString() === '3,1';
const test10b = instanceB.all("odds").toString() === '5,9';
console.assert(test10a, 'Test 10.A - .all("odds")');
console.assert(test10b, 'Test 10.B');

const test11a = instanceA.all("nanys").toString() === 'e,*';
const test11b = instanceB.all("nanys").toString() === '!,I0';
console.assert(test11a, 'Test 11.A - .all("nanys")');
console.assert(test11b, 'Test 11.B');
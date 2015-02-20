/**
 * Created by christianmutikainen on 2015-02-14.
 */
var _ = require('lodash');

function FSM (word) {
    /** This validates the input*/
    if (word) var wordArr = word.split('');
    else {
        return "requires type 'string'";
    }
    /** This creates the states*/
    var wordArrLength = wordArr.length;
    var stateArr = _.range(0, wordArrLength);
    var transArr = _.zip(wordArr, _.map(stateArr, function (s) {return s+1}));

    /** This is the 5-tuple */
    const inputs = new Set(wordArr);
    const states = new Set(stateArr);
    const initialState = 0;
    const finalStates = new Set([wordArrLength]);
    const transition = function (state, input) {
        var nextState;
        if (! states.has(state)) {
            return 'invalidState';
        }
        const arc = transArr[state];
        if (arc[0] === input) {
            nextState = arc[1]
        } else {
            if (inputs.has(input)) console.log('Invalid Input for State: ' + state);
            else console.log('Alphabet does not contain this Input');
            nextState = state;
        }
        return nextState;
    };

    /** This function is return and can 'run' the machine by accepting inputs */
    return function () {
        var current = initialState;
        return function (input) {
            var next = transition(current, input);
            current = next;
            if (finalStates.has(current)) return 'final';
            return next
        }
    }(initialState);
}

module.exports = FSM;


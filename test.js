/**
 * Created by christianmutikainen on 2015-02-20.
 */
var _ = require('lodash');
var FSM = require('./stringRecognizer');
var assert = require("assert");

describe('string-recognizer', function(){
    describe('#fsm()', function(){

        it("should return the next state until value 'final' ", function(){
            var fsm = FSM('cat');

            assert.equal(1, fsm('c'));
            assert.equal(2, fsm('a'));
            assert.equal('final', fsm('t'));
        })
    })
});
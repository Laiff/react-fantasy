/**
 * Created by laiff on 13.12.14.
 */
var Seq = require('fantasy-seqs').Seq,
    seq = require('../').seq;

var initial = function() {
    //return Seq.fromArray(['some string', 'other string']);
    return Seq.empty();
};

var renderItem = function(value) {
    return '<div>' + value + '</div> \n'
};

var res = seq(renderItem).render(initial());

console.log(res);
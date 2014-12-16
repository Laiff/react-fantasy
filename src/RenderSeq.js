/**
 * Created by laiff on 09.12.14.
 */
var daggy = require('daggy'),
    Option = require('fantasy-options').Option,
    StateT = require('fantasy-states').StateT,
    C = require('fantasy-combinators'),

    compose = C.compose,
    constant = C.constant,
    identity = C.identity;

var M = StateT(Option);

var render = function(a) {
    return function (b) {
        return b.map(a.then);
    }
};

function RenderSeq(then, fallback) {
    var that = daggy.getInstance(this, RenderSeq);
    that.then = then || identity;
    that.fallback = fallback || constant([]);
    that.program = M.of(that)
        .chain(compose(M.modify)(render))
        .chain(constant(M.get));
    return that;
}

RenderSeq.of = function(then, fallback) {
    return RenderSeq(then, fallback);
};

RenderSeq.prototype = {

    withThen : function(then) {
        return RenderSeq(then, this.fallback);
    },

    withFallback : function(fallback) {
        return RenderSeq(this.then, fallback);
    },

    render : function(initial) {
        return this.program.exec(initial).chain(identity);
    }
};

// Export
if(typeof module != 'undefined')
    module.exports = RenderSeq;
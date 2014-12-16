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
        return b.fold(a.then, a.fallback);
    }
};

function RenderOption(then, fallback) {
    var that = daggy.getInstance(this, RenderOption);
    that.then = then || identity;
    that.fallback = fallback || constant(null);
    that.program = M.of(that)
        .chain(compose(M.modify)(render))
        .chain(constant(M.get));
    return that;
}

RenderOption.of = function(then, fallback) {
    return RenderOption(then, fallback);
};

RenderOption.prototype = {

    withThen : function(then) {
        return RenderOption(then, this.fallback);
    },

    withFallback : function(fallback) {
        return RenderOption(this.then, fallback);
    },

    render : function(initial) {
        return this.program.exec(initial).chain(identity);
    }
};

// Export
if(typeof module != 'undefined')
    module.exports = RenderOption;
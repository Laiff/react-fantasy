/**
 * Created by laiff on 16.12.14.
 */

var pt = require('react/lib/ReactPropTypes'),

    Option = require('fantasy-options'),
    Seq =   require('fantasy-seqs'),
    Json = require('fantasy-json');

var PropTypes = {
    option : pt.instanceOf(Option),
    seq : pt.instanceOf(Seq),
    json : pt.instanceOf(Json)
};

module.exports = PropTypes;
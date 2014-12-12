/**
 * Created by laiff on 09.12.14.
 */

var RenderOption = require('./src/RenderOption'),
    RenderSeq = require('./src/RenderSeq');

// Export
if(typeof module != 'undefined')
    module.exports = {
        option : RenderOption.of,
        seq : RenderSeq.of
    };
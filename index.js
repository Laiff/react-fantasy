/**
 * Created by laiff on 09.12.14.
 */

var RenderOption = require('./src/RenderOption');

// Export
if(typeof module != 'undefined')
    module.exports = {
        option : RenderOption.of
    };
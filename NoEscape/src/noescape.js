noescape = {
	escapeForJSONStrings: function (str) {
            var that = this;
            for (var i in that.escapeCharacterMappings) {
                str = str.replace(that.escapeCharacterMappings[i]['regex'], that.escapeCharacterMappings[i]['char'].toString());
            }

            return str;
        },
        //Index for the characters to be not escaped (even if escaped by default)
        escapeCharacterMappings: {
            0: {'char': "\\\\", 'regex': /\\/g},
            1: {'char': "\\\"", 'regex': /"/g}
            
        }	
};

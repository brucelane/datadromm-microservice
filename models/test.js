var mongoose = require('mongoose'); 
var shaderSchema = new mongoose.Schema({
     name: {type: String},
     text: {type: String},
     url: {type: String},
     created: {type: Date},
     isValid : {type: Boolean} 
});
 
module.exports = mongoose.model( 'Shader' , shaderSchema ); 
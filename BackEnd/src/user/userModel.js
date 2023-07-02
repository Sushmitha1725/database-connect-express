var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    mothername: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Data', userSchema);//collection
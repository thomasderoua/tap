/*
Import
*/
    // Mongoose
    const mongoose = require('mongoose')
    const { Schema } = mongoose;
//

/*
Mongoose schema deefinition
Declare each property and type needed for the schema
*/
    const identitySchema = new Schema({
        user: String,
        score: Number,
        creationDate: String
    })
//

/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const ScoreModel = mongoose.model('score', identitySchema);
    module.exports = ScoreModel;
//
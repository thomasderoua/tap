/* 
Definition
The object Model{} is used in main.controller
You need to add a new propetry for each Mongoose schema
*/
    const Models = {
        identity: require('../models/identity.model'),
        score: require('../models/score.model')
    };
//

/* 
Export
*/
    module.exports = Models;
//
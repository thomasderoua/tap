/*
Import
*/
const ScoreModel = require('../../models/score.model')
//

/*
Methods
*/
/**
 * Set user stat
 * @param score: Number
 * @param user: User with req.user
*/
const setScore = (score, user) => {
    return new Promise( (resolve, reject) => {
        // Register new score
        var body = {
            user: user.first_name + ' ' + user.last_name, 
            score: score,
            creationDate: new Date()
        };

        ScoreModel.create(body)
        .then( mongoResponse => {
            resolve({status: 200, _id: mongoResponse._id});
        }).catch( mongoResponse => reject(mongoResponse) )
    });
};

/**
 * Get all stats
*/
const getScores = () => {
    return new Promise( (resolve, reject) => {
        // Search user by email
        ScoreModel.find((error, scores) => {
            if(error) return reject(error) // Mongo Error
            else{
                resolve({ scores: scores })
            };
        }).sort({score: -1});
    });
};

/*
Export
*/
module.exports = {
    setScore,
    getScores
}
//
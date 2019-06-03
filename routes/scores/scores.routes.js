/*
Imports
*/
    // Node
    const express = require('express');
    const authRouter = express.Router();

    // Inner
    const Mandatory = require('../../services/mandatory.service');
    const Vocabulary = require('../../services/vocabulary.service');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { checkFields } = require('../../services/request.service');
    const { register, confirmIdentity, login, logout, setPassword, setScore, getScores } = require('./scores.controller');
//

/*
Routes definition
*/
    class AuthRouterClass {

        // Inject Passport to secure routes
        constructor({ passport }) {
            this.passport = passport;
        }
        
        // Set route fonctions
        routes(){

            /**
             * SET Route to set stats
             * @param body: Object => email: String, password: String
             * @callback => send user _id and date informations
            */
            authRouter.post( '/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) } else {
                    setScore(req.body.score, req.user)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse) );
                }
            });

            /**
             * GET Route to login user
             * @param body: Object => email: String, password: String
             * @callback => send user _id and date informations
            */
            authRouter.get( '/', (req, res) => {
                getScores(res)
                .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse) );
            });
        };

        // Start router
        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return authRouter;
        };
    };
//

/*
Export
*/
    module.exports = AuthRouterClass;
//
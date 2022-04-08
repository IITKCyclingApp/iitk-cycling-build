import mongoose from 'mongoose';
import { createRequire } from "module";
import e from 'express';
const require = createRequire(import.meta.url);
const secret = require('./config.json');
const jwt = require('jsonwebtoken');
// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb+srv://avi0000:iitk-cycling0000@cluster0.3cvdk.mongodb.net/iitk_cycle?retryWrites=true&w=majority');
// }

/*
{
    in header token,
    
    "userId":"623580896de98a209c0c6ce0"
}
*/
async function verify(req, res, next) {

    if (!req.headers['authorization']) {
        return res.status(401).json({ "auth": false, "msg": "Status unauthorised" });
    }
    let token = req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(401).json({ "auth": false, "msg": "Status unauthorised" });
    }
    try {

        let payload = jwt.verify(token, secret.secret);
       
        if (req.body.userId) {

            if (payload.userId != req.body.userId) {
                if (req.body.dealerId) {
            
                    if (payload.dealerId != req.body.dealerId) {
                        return res.status(401).json({ "auth": false, "msg": "Status unauthorised dealer." });
                    }
                }
                else{

                    return res.status(401).json({ "auth": false, "msg": "Status unauthorised user." });
                }
            }
        }
        else if (req.body.dealerId) {
            
            if (payload.dealerId != req.body.dealerId) {
                
                return res.status(401).json({ "auth": false, "msg": "Status unauthorised dealer." });
            }
        }
        else {
            return res.status(401).json({ "auth": false, "msg": "Status unauthorised ." });

        }


    } catch (err) {
        return res.status(401).json({ "auth": false, "msg": "Status unauthorised ." });
    }
    next();
}

export default verify;
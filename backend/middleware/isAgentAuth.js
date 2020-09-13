const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY_USER);
        req.agentId = decodedToken.agentId;
        // console.log()
        next()
    } catch(error){
        res.status(401).json({
            message : 'User Auth Failed'
        });
    }
}
const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try{
        const token = req.headers.adminauthorization.split(" ")[1];
        // console.log(token);
        const decodedToken = jwt.verify(token, process.env.JWT_KEY_ADMIN);
        req.adminId = decodedToken.adminId;
        // console.log(req.adminId);
        next()
    } catch(error){
        res.status(401).json({
            message : 'Admin Auth Failed'
        });
    }
}

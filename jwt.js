import jwt from 'jsonwebtoken';

export const jwtAuthMiddleware = (req, res, next) => {
       // first check request headers has authorization or not
    const authorization = req.headers.authorization;
    console.log(authorization);

    //check authorization
    if(!authorization){
        return res.status(400).json({error : "token not found"});
    }

    // extract the token 
    const token = authorization.split(' ')[1];
    if(!token) return res.status(401).json({ error: 'Unauthorized' });
    try{
        //verify the token
        const decoded = jwt.verify(token, "12345");

        //attach user information to the request object
        req.user = decoded;
        next();

    }
    catch(err) {
        console.log(err);
        res.status(401).json({error: "Invalid token"});
    }

}


// function to generate token 
export const generateToken = (userData) => {
    //generate token 
    return jwt.sign(userData, "12345", {expiresIn: 30000});
}


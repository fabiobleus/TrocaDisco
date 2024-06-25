import jwt from 'jsonwebtoken';
export const auth = (req,res,next) => {
    const token = req.headers.auth;
    if (!token) {
        return res.sendStatus(401);
    };
    jwt.verify(token,process.env.HASHTOKEN,(erro)=> {
        if (erro){
            return res.sendStatus(401);
        };
        next();
    });
    
};

import jwt from "jsonwebtoken";
import "dotenv/config";

export const jwtVerify = (req, res, next) => {

    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];
    try {

        if(!token) {
            return res.status(401).json("Access Denied: No Token Provided");
        }
        const tokenVerify = jwt.verify(token, process.env.accessToken);
        req.userId = tokenVerify.id;
        next();
    } catch (error) {
        return res.status(403).json("Invalid or Expired Token" + error.message);
    }
}
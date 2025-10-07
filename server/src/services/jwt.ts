import JWT from "jsonwebtoken";
import dotenv from 'dotenv';
import { User } from "../../app/generated/prisma";


dotenv.config();

//this will generate tokens
class JWTService {
    public static generateTokenForUser(user: User){

        const payload = {
            id: user?.id,
            email: user?.email,
        };
        const token = JWT.sign(payload, process.env.JWT_SECRET!);
        return token;
    }
}
export default JWTService;
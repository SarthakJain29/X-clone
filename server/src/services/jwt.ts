import JWT from "jsonwebtoken";
import dotenv from 'dotenv';
import { User } from "../../app/generated/prisma";
import { JWTUser } from "../interfaces";


dotenv.config();

//this will generate tokens
class JWTService {
    public static generateTokenForUser(user: User){

        const payload: JWTUser = {
            id: user?.id,
            email: user?.email,
        };
        const token = JWT.sign(payload, process.env.JWT_SECRET!);
        return token;
    }
    
    public static decodeToken(token?: string) {
        if (!token) return null; // handle undefined token safely

        try {
            const decoded = JWT.verify(token, process.env.JWT_SECRET!) as unknown as JWTUser;
            return decoded;
    }   catch (error) {
            console.error("Invalid token:", error);
            return null;
    }
  }
}
export default JWTService;
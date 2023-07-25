
import { tokenVerificationErrors } from "../utils/TokenManager.js";
import jwt from "jsonwebtoken";

export const requireRefreshToken = (req, res, next) => {
    try {
        const refreshTokenCookie = req.cookies.refreshToken;
        if (!refreshTokenCookie) throw new Error("No existe el token");
        const { uid } = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);

    } catch (error) {
        console.log(error)
    }
};


/*const TokenVerificationErrors ={
    "invalid signature": "la firma del JWT no es valida",
    "jwt expired": "JWT expirado",
    "invalid token": "token no valido",
    "No Bearer": "Utiliza formato Barer",
    "jwt malformed": "JWT formato no valido",
};
return res
.status(401)
.send({error: TokenVerificationErrors[error.message]});*/

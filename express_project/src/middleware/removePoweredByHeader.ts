import { NextFunction, Request, Response } from "express";

export const removePoweredByHeader = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    res.removeHeader("X-Powered-By"); // Remove the X-Powered-By header

    next(); // Call the next middleware or route handler
}
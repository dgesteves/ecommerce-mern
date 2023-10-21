import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { AuthErrors } from '../../constants/errors/auth';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json({ message: AuthErrors.NO_TOKEN_PROVIDED });
    }

    jwt.verify(authorization, process.env.JWT_SECRET, (err) => {
      if (err) {
        return res.status(403).json({ message: AuthErrors.INVALID_TOKEN });
      }

      next();
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({ message: err.message });
  }
}

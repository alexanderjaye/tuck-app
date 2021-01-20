import { Request, Response, Next } from 'express'
import { getRepository, getConnection } from 'typeorm';

import { User } from '../entities/User';

const authMiddleware = async (req: Request, res: Response, next: Next): Promise<any> => {

  const userRepository = getConnection().getRepository(User);

  try {
    const { uid } = req.session;
    const user = await userRepository.findOne({ _uid: uid });
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

export { authMiddleware };

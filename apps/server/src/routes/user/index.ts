import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { UserModel } from '../../models/user';
import { UserErrors } from '../../constants/errors/user';
import { UserInfos } from '../../constants/infos/user';

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (user) {
    return res.status(400).json({ message: UserErrors.USER_ALREADY_EXISTS });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword });

  await newUser.save();

  res.status(201).json({ message: UserInfos.USER_CREATED_SUCCESSFULLY });
});

export { router as userRouter };
